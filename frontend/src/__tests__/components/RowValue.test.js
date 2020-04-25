import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import RowValue from '../../components/RowValue';

const FAKE_DATA = {
  key: 1,
  name: 'Cobre',
  dateParse: '11-04-2020',
  valueParse: '1.000',
};

test('should render correctly', () => {
  const { asFragment } = render(<RowValue valueData={FAKE_DATA} />);
  expect(asFragment()).toMatchSnapshot();
});

test('should render correctly', () => {
  const { getByTestId } = render(<RowValue valueData={FAKE_DATA} />);
  const rightClick = { button: 2 };
  fireEvent.click(getByTestId('btn-get-historic'), rightClick);
});
