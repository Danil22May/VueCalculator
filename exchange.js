const moneys = [
  { currency: "USD", rate: 1 },
  { currency: "EUR", rate: 0.85 },
  { currency: "UAH", rate: 40 },
];

const fromCurrency = "UAH";
const amount = 120;
const toCurrency = "EUR";

const value = moneys.find((rate) => rate.currency === fromCurrency);

const value2 = moneys.find((rate) => rate.currency === toCurrency);

let result = amount / value.rate;
result = result * value2.rate;
console.log(result.toFixed(2));
