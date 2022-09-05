import React from 'react';
import { useSelector } from 'react-redux';
import ReactECharts from 'echarts-for-react';

const Chart = ({ typeChart }) => {
  const graphStore = useSelector((state) => state.graph.data);
  const graphData = graphStore.data;
  const dates = graphData.map((item, index) => index);
  const data = graphData.map((item) => [+item[4], +item[1], +item[3], +item[2]]);
  const volume = graphData.map((item, index, array) => [
    index,
    item[5],
    array[index - 1]
      ? array[index][4] > array[index - 1][4] ? 1 : -1
      : -1,
  ]);
  const getArrayDates = () => {
    const today = new Date();
    const datesArray = [];
    for (let i = 0; i < graphData.length; i++) {
      const newDate = new Date(today.setDate(today.getDate() - 1));
      datesArray.push(newDate);
    }
    return datesArray;
  };
  const arrayDates = getArrayDates().map(
    (item) => `${item.toDateString().split(' ')[2]} ${item.toDateString().split(' ')[1]}`,
  );
  const max = graphData.map((item, index) => [
    index,
    +item[4],
    arrayDates[index],
  ]);

  const optionCandlestick = {
    visualMap: {
      show: false,
      seriesIndex: 1,
      dimension: 2,
      pieces: [
        {
          value: -1,
          color: '#86303E',
          borderColor: '#86303E',
        },
        {
          value: 1,
          color: '#127350',
          borderColor: '#127350',
        },
      ],
    },
    axisPointer: {
      show: true,
      link: [
        {
          xAxisIndex: 'all',
        },
      ],
      label: {
        backgroundColor: '#272D37',
        color: '#FFFFFF',
      },
    },
    xAxis: [
      {
        show: true,
        type: 'category',
        data: dates,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.1)',
          },
        },
        axisPointer: {
          label: {
            show: false,
          },
        },
      },
      {
        show: true,
        type: 'category',
        data: dates,
        gridIndex: 1,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.1)',
          },
        },
        axisPointer: {
          label: {
            show: false,
          },
          show: true,
        },
      },
    ],
    yAxis: [
      {
        position: 'right',
        scale: true,
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.1)',
          },
        },
      },
      {
        position: 'right',
        scale: true,
        gridIndex: 1,
        axisLabel: { show: false },
        splitLine: { show: false },
      },
    ],
    grid: [
      {
        left: '10%',
        right: '8%',
        height: '65%',
      },
      {
        left: '10%',
        right: '8%',
        top: '74%',
        height: '6%',
      },
    ],
    dataZoom: [
      {
        show: false,
        xAxisIndex: [0, 1],
      },
      {
        type: 'inside',
        xAxisIndex: [0, 1],
      },
    ],
    series: [
      {
        type: 'candlestick',
        name: 'Day',
        data,
        itemStyle: {
          color: '#EB6B6B',
          color0: '#0ECB81',
          borderColor: '#EB6B6B',
          borderColor0: '#0ECB81',
        },
      },
      {
        type: 'bar',
        name: 'Volume',
        xAxisIndex: 1,
        yAxisIndex: 1,
        data: volume,
      },
    ],
  };
  const optionLine = {
    grid: {
      left: '10%',
      right: '8%',
      height: '71%',
    },
    tooltip: {
      trigger: 'axis',
      formatter: (params) => `${params[0].data[1]}<br />${params[0].data[2]}`,
      backgroundColor: '#272D37',
      borderColor: '#272D37',
      textStyle: {
        color: '#FFFFFF',
      },
    },
    dataZoom: {
      type: 'inside',
      realtime: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      axisPointer: {
        label: {
          show: false,
        },
        show: true,
      },
      data: arrayDates,
    },
    yAxis: {
      type: 'value',
      position: 'right',
      scale: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      axisLabel: {
        show: true,
        color: '#8C939D',
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
    series: [
      {
        showSymbol: false,
        data: max,
        type: 'line',
        areaStyle: {
          color: '#0ECB81',
          opacity: '0.15',
        },
        itemStyle: {
          color: '#0ECB81',
        },
        emphasis: {
          itemStyle: {
            color: '#0ECB81',
            borderColor: '#0ECB81',
          },
        },
      },
    ],
  };

  return (
    <ReactECharts
      key={typeChart ? 'candlestick' : 'line'}
      option={typeChart ? optionCandlestick : optionLine}
      style={{
        width: '875px',
        height: '681px',
        position: 'absolute',
        top: '10px',
        left: '-86px',
        zIndex: 1,
      }}
    />
  );
};

export default Chart;
