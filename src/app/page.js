"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Converter from "./Component/Converter/Converter";
import { currencyService } from "./Service/currencyService";
import { CurrencyArray } from "./Component/CurrencyName/CurrencyArray";



export default function CurrencyConverter() {

  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [result, setResult] = useState(null);

  const convert = async () => {
    const res = await currencyService();
    console.log(res.conversion_rates.AED);
    console.log(CurrencyArray.code);
    
    
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
       <Converter/>
      </div>

      <div className={styles.result}>
        {result && `${amount} ${from} = ${result} ${to}`}
      </div>
    </div>
  );
}
