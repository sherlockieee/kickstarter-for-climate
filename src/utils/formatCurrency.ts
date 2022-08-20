const USDformatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const EURformatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
  });
  

export const formatCurrency = ({value, currency}: {value: number, currency: 'USD' | 'EUR'}) => {
    if (currency === "USD") {
        return USDformatter.format(value)
    } else if (currency === "EUR") {
        return EURformatter.format(value);
    }
}