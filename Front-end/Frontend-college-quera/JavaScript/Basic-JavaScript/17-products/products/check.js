const products = [
    {
      id: 1,
      title: 'محصول اول',
      price: '32000',
      date: '1596902113'
    },
    {
      id: 2,
      title: 'محصول دوم',
      price: '46000',
      date: '1555891200'
    },
    {
      id: 3,
      title: 'محصول سوم',
      price: '20000',
      date: '1515369600'
    },
    {
      id: 4,
      title: 'محصول چهارم',
      price: '88000',
      date: '1509580800'
    },
    {
      id: 5,
      title: 'محصول پنجم',
      price: '11000',
      date: '1477267200'
    }
];

let p = products.map((x) => x.price/2)
console.log(p)