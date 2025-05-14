import React from "react";
import { CurrencyArray } from "./CurrencyArray";

const Amount = ({ result, amount, from, to, styles }) => {
  const fromCurrency = CurrencyArray.find((c) => c.code === from);
  const toCurrency = CurrencyArray.find((c) => c.code === to);
  console.log(styles, "styles");

  return (
    <div>
      {result && (
        <div className={styles.resultvalue}>
          <p>
            {amount} ({fromCurrency?.code}) {fromCurrency?.name || from}=
            {result} ({toCurrency?.code}) {toCurrency?.name || to}
          </p>
          <p></p>
        </div>
      )}
    </div>
  );
};

export default Amount;
