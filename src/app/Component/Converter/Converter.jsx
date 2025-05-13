import React from "react";
import { useState } from "react";
import style from "./Conterver.module.scss";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { CurrencyArray } from "../CurrencyName/CurrencyArray";

const Converte = () => {
  const [amount, setAmount] = useState("");
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
      <Autocomplete
  disablePortal
  options={CurrencyArray}
  getOptionLabel={(option) => `${option.code} - ${option.name}`} 
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Select Currency" />}
/>
      <label>To</label>
      <Autocomplete
  disablePortal
  options={CurrencyArray}
  getOptionLabel={(option) => `${option.code} - ${option.name}`} 
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Select Currency" />}
/>
    </div>
  );
};

export default Converte;



