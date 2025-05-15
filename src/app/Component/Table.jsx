
import React from "react";
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
  Tooltip,
} from "@mui/material";
import { CurrencyArray } from "./CurrencyArray";

const Table = ({ currency, styles }) => {
  const enrichedCurrency = currency.map((curr) => {
    const match = CurrencyArray.find((item) => item.code === curr.code);
    return {
      ...curr,
      ...match,
    };
  });

  const baseCurrencyCode = currency[0]?.code || "Base";

  const filteredCurrency = enrichedCurrency.filter(
    (c) => c.code !== baseCurrencyCode
  );

  return (
    <div>
      <Typography
  variant="h6"
  sx={{
    marginBottom: "1rem",
    textAlign: "center",
    fontWeight: "600",
    color: "black",
    fontSize: {
      xs: "1rem",    
      sm: "1.2rem",  
      md: "1.5rem",  
      lg: "1.75rem", 
      xl: "2rem",    
    },
  }}
>
  Equivalent of <strong>1 {baseCurrencyCode}</strong> in Other Currencies
</Typography>


      <TableContainer component={Paper} className={styles.customtablecontainer}>
        <MuiTable className={styles.customtable}>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Code</TableCell>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>Country</TableCell>
              <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>Currency</TableCell>
              <Tooltip title={`Value of 1 ${baseCurrencyCode} in this currency`}>
                <TableCell>Rate </TableCell>
              </Tooltip>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCurrency.map((c, index) => (
              <TableRow key={index}>
                <TableCell>
                  {c.countryCode ? (
                    <Avatar
                      src={`https://flagcdn.com/48x36/${c.countryCode}.png`}
                      alt={c.countryCode}
                      variant="rounded"
                      className={styles.flag}
                    />
                  ) : (
                    " "
                  )}
                </TableCell>
                  <TableCell>{c.code}</TableCell>
                <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>{c.name?.split(" ")[0] || "-"}</TableCell>
                <TableCell sx={{ display: { xs: "none", sm: "table-cell" } }}>{c.name || "-"}</TableCell>
                <TableCell>{c.rate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </div>
  );
};

export default Table;
