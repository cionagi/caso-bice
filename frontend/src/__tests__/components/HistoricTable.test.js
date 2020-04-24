import React from 'react';
import { render } from '@testing-library/react';

import HistoricTable from '../../components/HistoricTable';

test('Link renders correctly', () => {
  const { asFragment } = render(<HistoricTable />);
  expect(asFragment()).toMatchSnapshot();
});
