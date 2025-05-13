// import React from "react";
// import style from "./Conterver.module.scss";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";

// const Converter = ({ amount, setAmount, from, setFrom, to, setTo, currencyList }) => {

//   return (
//     <div className={style.inputGroup}>
//       {/* <label>Amount</label> */}
//       <input
//         type="number"
//         value={amount}
//         placeholder="Enter The Amount"
//         onChange={(e) => setAmount(Number(e.target.value))}
//       />

//       {/* <label>From</label> */}
//       <Autocomplete
//         disablePortal
//         options={currencyList}
//         getOptionLabel={(option) => `${option.code}`}
//         sx={{
//           width: {
//             xs: "100%",
//             sm: 250,
//             md: 300,
//             lg: 350,
//             xl: 400,
//           },
//         }}
//         value={currencyList.find((c) => c.code === from) || null}
//         onChange={(e, newValue) => setFrom(newValue?.code || "")}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             label="From"
//             sx={{
//               "& .MuiInputBase-root": {
//                 height: {
//                   xs: 58,
//                   sm: 60,
//                   md: 66,
//                   lg: 75,
//                   xl: 84,
//                 },
//               },
//             }}
//           />
//         )}
//       />
// {/*
//       <label>To</label> */}
//       <Autocomplete
//         disablePortal
//         options={currencyList}
//         getOptionLabel={(option) => `${option.code}`}
//         sx={{
//           width: {
//             xs: "100%",
//             sm: 250,
//             md: 300,
//             lg: 350,
//             xl: 400,
//           },
//         }}
//         value={currencyList.find((c) => c.code === to) || null}
//         onChange={(e, newValue) => setTo(newValue?.code || "")}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             label="To"
//             sx={{
//               "& .MuiInputBase-root": {
//                 height: {
//                   xs: 58,
//                   sm: 60,
//                   md: 66,
//                   lg: 75,
//                   xl: 84,
//                 },
//               },
//             }}
//           />
//         )}
//       />
//     </div>
//   );
// };

// export default Converter;

import React from "react";
import style from "./Conterver.module.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz"; 
import IconButton from "@mui/material/IconButton";

const Converter = ({
  amount,
  setAmount,
  from,
  setFrom,
  to,
  setTo,
  currencyList,
  currency,
}) => {
  const handleSwap = () => {
    const prevFrom = from;
    setFrom(to);
    setTo(prevFrom);

    console.log(currencyList, "currencyList");
        console.log(currency, "currency");

  };

  return (
    <div className={style.inputGroup}>
      {/* <label>Amount</label> */}
      <input
        type="number"
        value={amount}
        placeholder="Enter The Amount"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      {/* <label>From</label> */}
      <Autocomplete
        disablePortal
        options={currencyList}
        getOptionLabel={(option) => `${option.code}`}
        sx={{
          width: {
            xs: "100%",
            sm: 250,
            md: 300,
            lg: 350,
            xl: 400,
          },
        }}
        value={currencyList.find((c) => c.code === from) || null}
        onChange={(e, newValue) => setFrom(newValue?.code || "")}
        renderInput={(params) => (
          <TextField
            {...params}
            label="From"
            sx={{
              "& .MuiInputBase-root": {
                height: {
                  xs: 58,
                  sm: 60,
                  md: 66,
                  lg: 75,
                  xl: 84,
                },
              },
            }}
          />
        )}
      />
      {/* swap button  */}
      <IconButton
        onClick={handleSwap}
        className={style.swapButton}
        aria-label="swap currencies"
      >
        <SwapHorizIcon fontSize="large" />
      </IconButton>

      {/* <label>To</label> */}
      <Autocomplete
        disablePortal
        options={currencyList}
        getOptionLabel={(option) => `${option.code}`}
        sx={{
          width: {
            xs: "100%",
            sm: 250,
            md: 300,
            lg: 350,
            xl: 400,
          },
        }}
        value={currencyList.find((c) => c.code === to) || null}
        onChange={(e, newValue) => setTo(newValue?.code || "")}
        renderInput={(params) => (
          <TextField
            {...params}
            label="To"
            sx={{
              "& .MuiInputBase-root": {
                height: {
                  xs: 58,
                  sm: 60,
                  md: 66,
                  lg: 75,
                  xl: 84,
                },
              },
            }}
          />
        )}
      />
    </div>
  );
};

export default Converter;
