import React from 'react';
import { render } from '@testing-library/react';

import HistoricTableRow from '../../components/HistoricTableRow';

const DATA_FAKE = {
  date: '23-04-2020',
  valueFormat: '1.00 USD',
};

test('Link renders correctly', () => {
  const { asFragment } = render(<HistoricTableRow historicRow={DATA_FAKE} />);
  expect(asFragment()).toMatchSnapshot();
});
