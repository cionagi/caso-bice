import React from 'react';
import PropTypes from 'prop-types'; // ES6

const HistoricTableRow = ({ historicRow }) => {
  const { date, valueFormat } = historicRow;
  return (
    <tr>
      <td>{date}</td>
      <td>{valueFormat}</td>
    </tr>
  );
};

HistoricTableRow.propTypes = {
  historicRow: PropTypes.object.isRequired,
};

export default HistoricTableRow;
