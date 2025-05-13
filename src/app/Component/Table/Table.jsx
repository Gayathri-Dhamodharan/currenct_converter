import React from "react";
// import { CurrencyArray } from "../CurrencyName/CurrencyArray";


const Table = ({ currency }) => {  
  return (
    <div>
      {currency.map((c, index) => (
        <p key={index}>
          {c.code}- {c.rate}
        </p>
      ))}
    </div>
  );
};

export default Table;
