// Dependency
import React from 'react';
import PropTypes from 'prop-types';

// Components
import HistoricTableRow from './HistoricTableRow';

const HistoricTable = ({ historicData }) => {
  const renderRows = () => {
    return historicData.map((row) => <HistoricTableRow key={row.date} historicRow={row} />);
  };

  const renderTable = () => {
    return (
      <table className="table table-striped table-hover table-sm table-dark text-center">
        <thead>
          <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    );
  };

  return historicData.length ? (
    renderTable()
  ) : (
    <h2 className="text-center">No se pudieron cargar los datos.</h2>
  );
};

HistoricTable.defaultProps = {
  historicData: [],
};

HistoricTable.propTypes = {
  historicData: PropTypes.array,
};

export default HistoricTable;
