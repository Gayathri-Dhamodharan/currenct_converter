"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Converter from "./Component/Converter/Converter";
import { currencyService } from "./Service/currencyService";
import Amount from "./Component/Amount/Amount";
import Table from "./Component/Table/Table";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("1");
  const [from, setFrom] = useState("INR");
  const [to, setTo] = useState("USD");
  const [result, setResult] = useState(null);
  const [currencyList, setCurrencyList] = useState([]);
  const [currency, setCurrency] = useState([]);

  const convert = async () => {
    const response = await currencyService(from);
    if (!response) return;

    setCurrencyList(response.currencyList);
    setCurrency(response.currency);
    console.log("currency", currency);

    const rate = response.data.conversion_rates[to];
    console.log(rate, "rate");

    const converted = rate * amount;
    setResult(converted.toFixed(2));
  };

  useEffect(() => {
    convert();
    console.log("currency", currency);
  }, [amount, from, to]);

  return (
    <div>
      <h1 className={styles.heading}>Currency Converter</h1>

      <div className={styles.container}>
        <Converter
          amount={amount}
          setAmount={setAmount}
          from={from}
          setFrom={setFrom}
          to={to}
          setTo={setTo}
          currencyList={currencyList}
          currency={currency}
        />
      </div>

      <div className={styles.container}>
        <Amount
          result={result}
          amount={amount}
          from={from}
          to={to}
          styles={styles}
        />
      </div>

      <div className={styles.container}>
        <Table currency={currency} />
      </div>
    </div>
  );
}
