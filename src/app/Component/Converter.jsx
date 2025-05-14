import React from "react";
// import style from "./Conterver.module.scss";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import IconButton from "@mui/material/IconButton";
import { CurrencyArray } from "./CurrencyArray";

const Converter = ({
  amount,
  setAmount,
  from,
  setFrom,
  to,
  setTo,
  currencyList,
  styles,
}) => {
  const handleSwap = () => {
    const prevFrom = from;
    setFrom(to);
    setTo(prevFrom);
  };

  // Helper to get currency object from CurrencyArray
  const getCurrency = (code) => CurrencyArray.find((c) => c.code === code);

  return (
    <div className={styles.inputGroup}>
      {/* <label>Amount </label>
      <input
        type="number"
        value={amount}
        className={styles.amountInput}
        placeholder="Enter The Amount"
        onChange={(e) => setAmount(e.target.value)}
      /> */}
<TextField
  type="number"
  label="Amount"
  variant="outlined"
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
  sx={{
    width: { xs: "100%", sm: 250, md: 300, lg: 350, xl: 400 },
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

      {/* From Currency Autocomplete */}
      <Autocomplete
        disablePortal
        options={currencyList}
        getOptionLabel={(option) => `${option.code}`}
        isOptionEqualToValue={(option, value) => option.code === value.code}
        value={currencyList.find((c) => c.code === from) || null}
        onChange={(e, newValue) => setFrom(newValue?.code || "")}
        renderOption={(props, option) => {
          const currency = getCurrency(option.code);
          return (
            <li {...props}>
              {currency && (
                <img
                  src={`https://flagcdn.com/48x36/${currency.countryCode.toLowerCase()}.png`}
                  alt={currency.code}
                  style={{
                    width: 34,
                    height: 24,
                    objectFit: "cover",
                    borderRadius: 2,
                    marginRight: 8,
                  }}
                />
              )}
              {option.code}- ({currency?.name || ""})
            </li>
          );
        }}
        renderInput={(params) => {
          const selectedCurrency = getCurrency(from);
          return (
            <TextField
              {...params}
              label="From"
              InputProps={{
                ...params.InputProps,
                startAdornment: selectedCurrency && (
                  <img
                    src={`https://flagcdn.com/48x36/${selectedCurrency.countryCode.toLowerCase()}.png`}
                    alt={selectedCurrency.code}
                    style={{
                      width: 34,
                      height: 24,
                      objectFit: "cover",
                      borderRadius: 2,
                      marginRight: 8,
                    }}
                  />
                ),
              }}
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
          );
        }}
        sx={{ width: { xs: "100%", sm: 250, md: 300, lg: 350, xl: 400 } }}
      />

      {/* Swap Button */}
      <IconButton
        onClick={handleSwap}
        // className={styles.swapButton}
        aria-label="swap currencies"
      >
        <SwapHorizIcon fontSize="large" />
      </IconButton>

      {/* To Currency Autocomplete */}
      <Autocomplete
        disablePortal
        options={currencyList}
        getOptionLabel={(option) => `${option.code}`}
        isOptionEqualToValue={(option, value) => option.code === value.code}
        value={currencyList.find((c) => c.code === to) || null}
        onChange={(e, newValue) => setTo(newValue?.code || "")}
        renderOption={(props, option) => {
          const currency = getCurrency(option.code);
          return (
            <li {...props}>
              {currency && (
                <img
                  src={`https://flagcdn.com/48x36/${currency.countryCode.toLowerCase()}.png`}
                  alt={currency.code}
                  style={{
                    width: 24,
                    height: 18,
                    objectFit: "cover",
                    borderRadius: 2,
                    marginRight: 8,
                  }}
                />
              )}
              {option.code}- ({currency?.name || ""})
            </li>
          );
        }}
        renderInput={(params) => {
          const selectedCurrency = getCurrency(to);
          return (
            <TextField
              {...params}
              label="To"
              InputProps={{
                ...params.InputProps,
                startAdornment: selectedCurrency && (
                  <img
                    src={`https://flagcdn.com/48x36/${selectedCurrency.countryCode.toLowerCase()}.png`}
                    alt={selectedCurrency.code}
                    style={{
                      width: 24,
                      height: 18,
                      objectFit: "cover",
                      borderRadius: 2,
                      marginRight: 8,
                    }}
                  />
                ),
              }}
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
          );
        }}
        sx={{ width: { xs: "100%", sm: 250, md: 300, lg: 350, xl: 400 } }}
      />
    </div>
  );
};

export default Converter;
