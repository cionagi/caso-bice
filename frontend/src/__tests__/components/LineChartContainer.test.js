import React from 'react';
import { render } from '@testing-library/react';

import LineChartContainer from '../../components/LineChartContainer';

test('Link renders correctly', () => {
  const { asFragment } = render(<LineChartContainer />);
  expect(asFragment()).toMatchSnapshot();
});
