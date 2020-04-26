/* eslint-disable react-hooks/exhaustive-deps */
// Dependency
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Components

const Pagination = ({ current, totalPage, handlePagination }) => {
  const [items, setItems] = useState([]);

  const drawItemPagination = () => {
    const itemElement = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < totalPage; i++) {
      itemElement.push(
        <li className={`page-item ${i === current && 'active'}`} aria-current="page" key={i}>
          <span
            tabIndex={i}
            role="button"
            className="page-link "
            onClick={() => {
              handlePagination(i);
            }}
            onKeyDown={() => {
              handlePagination(i);
            }}
            data-testid={`pagination-item-${i}`}
          >
            {i + 1}
          </span>
        </li>
      );
    }
    setItems(itemElement);
  };

  useEffect(() => {
    if (totalPage) {
      drawItemPagination();
    }
  }, [current, totalPage]);

  return (
    <nav>
      <ul className="pagination pagination-sm" data-testid="pagination">
        {items}
      </ul>
    </nav>
  );
};

Pagination.defaultProps = {
  current: 1,
  totalPage: 1,
};

Pagination.propTypes = {
  current: PropTypes.number,
  totalPage: PropTypes.number,
  handlePagination: PropTypes.func,
};

export default Pagination;
