// START ===> This function is  for order crypto percentage numbers

export default function fixCryptoPercenrageFormat(price, style) {
  return (
    <div className={`${price > 0 ? "text-teal-400" : "text-red-400"} mr-5 text-sm tracking-wider font-bold ${style ? style : ""}`}>
      {(price.toFixed(2) < 0 && price.toFixed(2).substring(1)) || price.toFixed(2)}%{price > 0 ? "+" : "-"}
    </div>
  );
}
// END ===> This function is  for order crypto percentage numbers

// START ===> This function is for Volume Foramt
export function convertToInternationalCurrencySystem(labelValue) {
  // Nine Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(1) + "B"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(1) + "M"
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(1) + "K"
    : Math.abs(Number(labelValue));
}
// END  ===> This function is for Volume Foramt
