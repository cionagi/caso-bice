import React from 'react';
import { render } from '@testing-library/react';

import HistoricValue from '../../components/HistoricValue';

const DATA_FAKE = [{ date: '01-01-2019', value: 2.71, valueFormat: '2.71 USD' }];

test('should render collapse open', () => {
  const { asFragment, queryByTestId } = render(<HistoricValue show historicData={DATA_FAKE} />);
  expect(queryByTestId('loading-component')).toBeFalsy();
  expect(asFragment()).toMatchSnapshot();
});
test('should render collapse close', () => {
  const { container, queryByTestId } = render(<HistoricValue show={false} historicData={[]} />);
  expect(queryByTestId('loading-component')).toBeTruthy();
  expect(container).toMatchSnapshot();
});
