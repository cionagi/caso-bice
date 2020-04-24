import React from 'react';
import { render } from '@testing-library/react';

import Pagination from '../../components/Pagination';

test('Link renders correctly', () => {
  const { asFragment } = render(<Pagination />);
  expect(asFragment()).toMatchSnapshot();
});
