import React from 'react';
import { render } from '@testing-library/react';

import RowValue from '../../components/RowValue';

const FAKE_DATA = {
  key: 1,
  name: 'Cobre',
  dateParse: '11-04-2020',
  valueParse: '1.000',
};

test('Link renders correctly', () => {
  const { asFragment } = render(<RowValue valueData={FAKE_DATA} />);
  expect(asFragment()).toMatchSnapshot();
});
