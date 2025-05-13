import axios from "axios";

const BASE_URL = "https://v6.exchangerate-api.com/v6";
const API_KEY = "5a454e3ce7ae5f37ad317ee0";

export const currencyService = async (baseCurrency = "INR") => {
  try {
    const response = await axios.get(
      `${BASE_URL}/${API_KEY}/latest/${baseCurrency}`
    );

    const codes = Object.keys(response.data.conversion_rates);

    const values = response.data.conversion_rates;

    console.log(Object.keys(values), "key", Object.values(values), "value");

    return {
      data: response.data,
      currencyList: codes.map((code) => ({
        code,
        name: code,
      })),
      currency: Object.entries(values).map(([code, rate]) => ({
        code,
        rate,
      })),
    };
  } catch (error) {
    console.error("Exchange Rate API error:", error);
    return null;
  }
};
