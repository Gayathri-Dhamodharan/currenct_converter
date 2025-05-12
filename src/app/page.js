"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  // const [result, setResult] = useState(null);

  const convert = async () => {
    const res = await fetch(
      `https://v6.exchangerate-api.com/v6/5a454e3ce7ae5f37ad317ee0/latest/ALL`
    );
    console.log(res.conversion_rates.AED);
    
    const data = await res.json();
    setResult(data.result.toFixed(2));
  };

  useEffect(() => {
    convert();
  }, [amount, from, to]);

  return (
    <div >
      <h1 className={styles.heading}>Currency Converter</h1>
      <div className={styles.container}>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label>From</label>
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
          <option>INR</option>
        </select>

        <label>To</label>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          <option>INR</option>
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>
      </div>

      {/* <div className={styles.result}>
        {result && `${amount} ${from} = ${result} ${to}`}
      </div> */}
    </div>
  );
}
