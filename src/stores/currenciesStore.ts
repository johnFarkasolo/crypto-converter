import { observable, computed, action } from 'mobx';
import axios from 'axios';
import { TCoin } from '../types';

class CurrenciesStore {
	@observable private items: TCoin[] = [];

	@computed
	get getItems() {
		return this.items;
	}

	@action
	setItems = (items: TCoin[]): void => {
		this.items = items;
	}

	@action
	fetchCoins = () => {
		 axios
      .get(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD`)
      .then(({ data }) => {
        const coins: TCoin[] = data.Data.map((coin: any) => {
          const obj: TCoin = {
            name: coin.CoinInfo.Name,
            fullName: coin.CoinInfo.FullName,
            ImageUrl: `https://www.cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
            price: coin.RAW.USD.PRICE.toFixed(2),
            valume24hour: parseInt(coin.RAW.USD.VOLUME24HOUR),
          };
          return obj;
        });
        this.items = coins;
      })
      .catch((err) => console.log(err));
	}
}

export default CurrenciesStore