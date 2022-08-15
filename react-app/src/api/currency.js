import BTC from '../assets/icons/criptorrency/Bitcoin.png';
import ETH from '../assets/icons/criptorrency/Etherium.png';
import XRP from '../assets/icons/criptorrency/Ripple.png';
import ADA from '../assets/icons/criptorrency/Cardano.png';
import USDT from '../assets/icons/criptorrency/Tether.png';
import LTC from '../assets/icons/criptorrency/Litecoin.png';
import ETN from '../assets/icons/criptorrency/Electroneum.png';
import ETC from '../assets/icons/criptorrency/EtheriumClassic.png';
import NEO from '../assets/icons/criptorrency/Neo.png';
import LINK from '../assets/icons/criptorrency/Chainlink.png';
import ENG from '../assets/icons/criptorrency/Enigma.png';
import ARNX from '../assets/icons/criptorrency/Aeron.png';
import XLM from '../assets/icons/criptorrency/Stellar.png';
import RVN from '../assets/icons/criptorrency/Ravencoin.png';
import NPXS from '../assets/icons/criptorrency/PundiX.png';
import PIVX from '../assets/icons/criptorrency/PIVX.png';
import NAS from '../assets/icons/criptorrency/Nebulas.png';
import PPC from '../assets/icons/criptorrency/Peercoin.png';

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

// export const currencyLis = getCurrencyList(currencyApiData, currencyList);
