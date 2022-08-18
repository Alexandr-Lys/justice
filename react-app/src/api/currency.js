import BTC from '../assets/svg/criptorrency/CryptocurrencyBTC.svg';
import ETH from '../assets/svg/criptorrency/CryptocurrencyETH.svg';
import XRP from '../assets/svg/criptorrency/CryptocurrencyXPR.svg';
import ADA from '../assets/svg/criptorrency/CryptocurrencyADA.svg';
import USDT from '../assets/svg/criptorrency/CryptocurrencyUSDT.svg';
import LTC from '../assets/svg/criptorrency/CryptocurrencyLTC.svg';
import ETN from '../assets/svg/criptorrency/CryptocurrencyETN.svg';
import ETC from '../assets/svg/criptorrency/CryptocurrencyETC.svg';
import NEO from '../assets/svg/criptorrency/CryptocurrencyNEO.svg';
import LINK from '../assets/svg/criptorrency/CryptocurrencyLINK.svg';
import ENG from '../assets/svg/criptorrency/CryptocurrencyENG.svg';
import ARNX from '../assets/svg/criptorrency/CryptocurrencyARNX.svg';
import XLM from '../assets/svg/criptorrency/CryptocurrencyXLM.svg';
import RVN from '../assets/svg/criptorrency/CryptocurrencyRVN.svg';
import NPXS from '../assets/svg/criptorrency/CryptocurrencyNPXS.svg';
import PIVX from '../assets/svg/criptorrency/CryptocurrencyPIVX.svg';
import NAS from '../assets/svg/criptorrency/CryptocurrencyNAS.svg';
import PPC from '../assets/svg/criptorrency/CryptocurrencyPPC.svg';

export const currencyList = [
  {
    name: 'currencyNameComponent',
    price: '',
    change: '',
    volume: '',
    capitalize: '',
    trade: 'tradeButton',
    fullName: 'Bitcoin',
    shortName: 'BTC',
    img: BTC,
  },
  {
    name: 'currencyNameComponent',
    price: '',
    change: '',
    volume: '',
    capitalize: '',
    trade: 'tradeButton',
    fullName: 'Etherium',
    shortName: 'ETH',
    img: ETH,
  },
  {
    name: 'currencyNameComponent',
    price: '',
    change: '',
    volume: '',
    capitalize: '',
    trade: 'tradeButton',
    fullName: 'Ripple',
    shortName: 'XRP',
    img: XRP,
  },
  {
    name: 'currencyNameComponent',
    price: '',
    change: '',
    volume: '',
    capitalize: '',
    trade: 'tradeButton',
    fullName: 'Cardano',
    shortName: 'ADA',
    img: ADA,
  },
  {
    name: 'currencyNameComponent',
    price: '',
    change: '',
    volume: '',
    capitalize: '',
    trade: 'tradeButton',
    fullName: 'TetherUS',
    shortName: 'USDT',
    img: USDT,
  },
  {
    name: 'currencyNameComponent',
    price: '',
    change: '',
    volume: '',
    capitalize: '',
    trade: 'tradeButton',
    fullName: 'Litecoin',
    shortName: 'LTC',
    img: LTC,
  },
  {
    name: 'currencyNameComponent',
    price: '',
    change: '',
    volume: '',
    capitalize: '',
    trade: 'tradeButton',
    fullName: 'Elecroneum',
    shortName: 'ETN',
    img: ETN,
  },
  {
    name: 'currencyNameComponent',
    price: '',
    change: '',
    volume: '',
    capitalize: '',
    trade: 'tradeButton',
    fullName: 'Etherium Classic',
    shortName: 'ETC',
    img: ETC,
  },
  {
    name: 'currencyNameComponent',
    price: '',
    change: '',
    volume: '',
    capitalize: '',
    trade: 'tradeButton',
    fullName: 'Neo',
    shortName: 'NEO',
    img: NEO,
  },
  {
    name: 'currencyNameComponent',
    price: '',
    change: '',
    volume: '',
    capitalize: '',
    trade: 'tradeButton',
    fullName: 'Chainlink',
    shortName: 'LINK',
    img: LINK,
  },
  {
    name: 'currencyNameComponent',
    price: '',
    change: '',
    volume: '',
    capitalize: '',
    trade: 'tradeButton',
    fullName: 'Enigma',
    shortName: 'ENG',
    img: ENG,
  },
  {
    name: 'currencyNameComponent',
    price: '',
    change: '',
    volume: '',
    capitalize: '',
    trade: 'tradeButton',
    fullName: 'Aeron',
    shortName: 'ARNX',
    img: ARNX,
  },
  {
    name: 'currencyNameComponent',
    price: '',
    change: '',
    volume: '',
    capitalize: '',
    trade: 'tradeButton',
    fullName: 'Stellar',
    shortName: 'XLM',
    img: XLM,
  },
  {
    name: 'currencyNameComponent',
    price: '',
    change: '',
    volume: '',
    capitalize: '',
    trade: 'tradeButton',
    fullName: 'Ravencoin',
    shortName: 'RVN',
    img: RVN,
  },
  {
    name: 'currencyNameComponent',
    price: '',
    change: '',
    volume: '',
    capitalize: '',
    trade: 'tradeButton',
    fullName: 'Pundi X',
    shortName: 'NPXS',
    img: NPXS,
  },
  {
    name: 'currencyNameComponent',
    price: '',
    change: '',
    volume: '',
    capitalize: '',
    trade: 'tradeButton',
    fullName: 'PIVX',
    shortName: 'PIVX',
    img: PIVX,
  },
  {
    name: 'currencyNameComponent',
    price: '',
    change: '',
    volume: '',
    capitalize: '',
    trade: 'tradeButton',
    fullName: 'Nebulas',
    shortName: 'NAS',
    img: NAS,
  },
  {
    name: 'currencyNameComponent',
    price: '',
    change: '',
    volume: '',
    capitalize: '',
    trade: 'tradeButton',
    fullName: 'Peercoin',
    shortName: 'PPC',
    img: PPC,
  },
];
export const getCurrencyList = (apiData, list) => currencyList.map((object, index) => {
  const volumeValue = apiData.RAW?.[list[index]?.shortName].RUB.VOLUMEDAYTO;
  const styledVolumeValue = `${((volumeValue) / 1000000).toFixed(2)}M`;
  return {
    ...object,
    price: apiData.DISPLAY?.[list[index]?.shortName].RUB.PRICE,
    change: `${apiData.DISPLAY?.[list[index]?.shortName].RUB.CHANGEPCTDAY}%`,
    volume: styledVolumeValue,
    capitalize: `${apiData.DISPLAY?.[list[index]?.shortName].RUB.TOTALTOPTIERVOLUME24HTO}`,
  };
});

