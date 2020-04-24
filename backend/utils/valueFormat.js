 const parse = (unit, value) => {
  switch (unit) {
    case 'dolar':
      return `${value} USD`;
    case 'Euro':
      return `${value}€`;
    case 'pesos':
      return `$${value}`;
    case 'porcentual':
      return `${value}%`;
    default:
      return value;
  }
};

module.exports = {
  parse,
};
