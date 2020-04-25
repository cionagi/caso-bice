import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Pagination from '../../components/Pagination';

describe('Test Pagination', () => {
  test('should renders correctly', () => {
    const { asFragment } = render(<Pagination current={1} totalPage={5} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should renders correctly without out props', () => {
    const { asFragment } = render(<Pagination />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('should change page', () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Pagination current={1} totalPage={5} handlePagination={onClick} />
    );
    fireEvent.click(getByTestId('pagination-item-1'));
    expect(onClick).toHaveBeenCalled();
  });

  test('should not show page 0', () => {
    const { getByTestId } = render(<Pagination current={1} totalPage={5} />);
    expect(getByTestId('pagination-item-0').textContent).not.toBe('0');
  });

  test('should render 5 page', () => {
    const { queryByTestId } = render(<Pagination current={1} totalPage={6} />);
    expect(queryByTestId('pagination-item-6')).toBeFalsy();
  });
});
