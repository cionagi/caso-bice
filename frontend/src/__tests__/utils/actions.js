import { getValues } from '../../Utils/actions';

const data = [
  {
    key: 'cobre',
    name: 'Precio del Cobre, dólares por libra',
    unit: 'dolar',
    date: 1584489600,
    value: 2.39,
    dateParse: '17-03-2020',
    valueParse: '2.39 USD',
  },
  {
    key: 'dolar',
    name: 'Dólar observado',
    unit: 'pesos',
    date: 1584489600,
    value: 855.09,
    dateParse: '17-03-2020',
    valueParse: '$855.09',
  },
  {
    key: 'euro',
    name: 'Euro',
    unit: 'pesos',
    date: 1584489600,
    value: 938.42,
    dateParse: '17-03-2020',
    valueParse: '$938.42',
  },
  {
    key: 'ipc',
    name: 'Indice de Precios al Consumidor (Var. c/r al período anterior)',
    unit: 'porcentual',
    date: 1577836800,
    value: 1.1,
    dateParse: '31-12-2019',
    valueParse: '1.1%',
  },
  {
    key: 'ivp',
    name: 'Indice de valor promedio',
    unit: 'pesos',
    date: 1586390400,
    value: 29706.22,
    dateParse: '08-04-2020',
    valueParse: '$29706.22',
  },
  {
    key: 'oro',
    name: 'Precio del Oro, dólares por onza',
    unit: 'dolar',
    date: 1584576000,
    value: 1473.2,
    dateParse: '18-03-2020',
    valueParse: '1473.2 USD',
  },
  {
    key: 'plata',
    name: 'Precio de la Plata, dólares por onza',
    unit: 'dolar',
    date: 1584576000,
    value: 11.69,
    dateParse: '18-03-2020',
    valueParse: '11.69 USD',
  },
  {
    key: 'uf',
    name: 'Unidad de fomento',
    unit: 'pesos',
    date: 1586390400,
    value: 28630.63,
    dateParse: '08-04-2020',
    valueParse: '$28630.63',
  },
  {
    key: 'utm',
    name: 'Unidad tributaria mensual',
    unit: 'pesos',
    date: 1583020800,
    value: 50021,
    dateParse: '29-02-2020',
    valueParse: '$50021',
  },
  {
    key: 'yen',
    name: 'Yen',
    unit: 'dolar',
    date: 1584489600,
    value: 107.33,
    dateParse: '17-03-2020',
    valueParse: '107.33 USD',
  },
];

test('returns all values getValues', async () => {
  const response = await getValues();
  expect(response).toEqual(data);
});
