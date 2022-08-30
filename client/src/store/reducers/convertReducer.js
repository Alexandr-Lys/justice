const ADD_DATA_TRANSFER = 'ADD_DATA_TRANSFER';

const defaultState = {
  course: 'Введите данные',
  reverseCourse: 'Введите данные',
  transfer: 'Введите данные',
};

// eslint-disable-next-line default-param-last
export const convertReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DATA_TRANSFER:
      return {
        course: action.payload.course,
        reverseCourse: action.payload.reverseCourse,
        transfer: action.payload.transfer,
      };
    default:
      return state;
  }
};

export const addDataTransferAction = (data, amount, currencyOf, currencyReceive) => (
  {
    type: ADD_DATA_TRANSFER,
    payload: {
      course: `1 ${currencyOf} = ${data} ${currencyReceive}`,
      reverseCourse: `1 ${currencyReceive} = ${1 / data} ${currencyOf}`,
      transfer: `${data * amount} ${currencyReceive}`,
    },
  }
);
