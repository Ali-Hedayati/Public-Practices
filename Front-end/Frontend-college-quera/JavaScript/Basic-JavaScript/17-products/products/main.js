const stocks = [
  {
      name: "Electric Khodro",
      price: 15218,
  },
  {
      name: "Iran Khodro",
      price: 55555555555555,
  },
  {
      name: "Iran arghaam",
      price: 118853,
  },
  {
    name: "gf",
    price: 2525252525,
},
  
];

///////////////// my answer 
// function getHighestPrice(stocks) {
//   if (!stocks.length) {
// 		return null;
// 	}
//   else {
// let Prices = stocks.map((x) => x.price)
// let FindBig = (Prices) => {
//   let Big = Prices[0];
//     for(let i = 0 ; i < Prices.length - 1 ; i++){
//       if(Big < Prices[i+1])
//       Big = Prices[i+1]
//     }
//     return Big
//   }
// let HpIndex = Prices.findIndex((num) => num == FindBig(Prices));
// return stocks[HpIndex].name;
// }
// }
///////////////////////////////////
// function getHighestPrice(stocks) {
//   let Prices = stocks.map((x) => x.price)
//   let sortPrices = Prices.sort();
//  // let Big = sortPrices.pop();
//   //let HpIndex = Prices.findIndex((num) => num == Big);
//   return {sortPrices , Prices}
// }
////////////////////QUERA
export function getHighestPrice(stocks) {
	if (!stocks.length) {
		return null;
	}
	return [...stocks].sort((a, b) => b.price - a.price)[0].name;
}
///////////////////////////
console.log(getHighestPrice(stocks)); 