// Dependency
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Components

const Pagination = ({ current = 1, totalPage = 1, handlePagination }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const a = [];
    for (let i = 0; i < totalPage; i++) {
      a.push(
        <li
          className={`page-item ${i === current && 'active'}`}
          aria-current="page"
          key={i}
          onClick={() => {
            handlePagination(i);
          }}
        >
          <a className="page-link " href="#">
            {i + 1}
          </a>
        </li>
      );
    }
    setItems(a);
  }, [current, totalPage]);
  return (
    <nav>
      <ul className="pagination pagination-sm">{items}</ul>
    </nav>
  );
};

Pagination.defaultProps = {
  current: 1,
  totalPage: 1,
};

Pagination.propTypes = {
  current: PropTypes.array,
  totalPage: PropTypes.array,
  handlePagination: PropTypes.array,
};

export default Pagination;
