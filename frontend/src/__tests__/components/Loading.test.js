import React from 'react';
import { render } from '@testing-library/react';

import Loading from '../../components/Loading';

test('Link renders correctly', () => {
  const { asFragment, getByTestId } = render(<Loading />);
  expect(getByTestId('loading-component')).toHaveClass(
    ' d-flex justify-content-center align-items-center'
  );
  expect(asFragment()).toMatchSnapshot();
});
