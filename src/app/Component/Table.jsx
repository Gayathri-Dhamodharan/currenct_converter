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

  return (
    <TableContainer component={Paper} className={styles.customtablecontainer}>
      <MuiTable className={styles.customtable}>
        <TableHead>
          <TableRow>
            <TableCell> </TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Currency</TableCell>
            <TableCell>Code</TableCell>
            <TableCell>Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {enrichedCurrency.map((c, index) => (
            <TableRow key={index}>
              <TableCell>
                {c.countryCode ? (
                  <Avatar
                    src={`https://flagcdn.com/48x36/${c.countryCode}.png`}
                    alt={c.countryCode}
                    variant="rounded"
                    className="flag"
                  />
                ) : (
                  "-"
                )}
              </TableCell>
              <TableCell>
                {c.countryCode ? c.name?.split(" ")[0] : "-"}
              </TableCell>
              <TableCell>{c.name || "-"}</TableCell>
              <TableCell>{c.code}</TableCell>
              <TableCell>{c.rate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
