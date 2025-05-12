
const BASE_URL = "https://v6.exchangerate-api.com/v6";
const API_KEY = "5a454e3ce7ae5f37ad317ee0";

export const currencyService = async (baseCurrency = "AED") => {
  try {
    const res = await fetch(`${BASE_URL}/${API_KEY}/latest/${baseCurrency}`);
    if (!res.ok) throw new Error(`Error fetching rates: ${res.status}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Exchange Rate API error:", error);
    return null;
  }
};
