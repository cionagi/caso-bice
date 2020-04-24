import React from 'react';
import { render } from '@testing-library/react';

import Loading from '../../components/Loading';

test('Link renders correctly', () => {
  const { asFragment } = render(<Loading />);
  expect(asFragment()).toMatchSnapshot();
});
