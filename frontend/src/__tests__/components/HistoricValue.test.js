import React from 'react';
import { render } from '@testing-library/react';

import HistoricValue from '../../components/HistoricValue';

test('Link renders correctly', () => {
  const { asFragment } = render(<HistoricValue />);
  expect(asFragment()).toMatchSnapshot();
});
