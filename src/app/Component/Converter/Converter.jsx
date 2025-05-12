import React from "react";
import { useState } from "react";
import style from "./Conterver.module.scss";
import { CurrencyArray } from "../CurrencyName/CurrencyArray";

const Converte = () => {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");

  return (
    <div className={style.inputGroup}>
      <label>Amount</label>
      <input
        type="number"
        value={amount}
        placeholder="Amount"
        onChange={(e) => setAmount(e.target.value)}
      />

      <label>From</label>
      <select value={from} onChange={(e) => setFrom(e.target.value)}>
        {CurrencyArray.map((code, index) => (
          <option key={index} value={code.code}>
           {code.code} - {code.name}
          </option>
        ))}
      </select>

      <label>To</label>
      <select value={to} onChange={(e) => setTo(e.target.value)}>
        {CurrencyArray.map((code, index) => (
          <option key={index} value={code.code}>
            {code.code} - {code.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Converte;
