import React from 'react';
import PropTypes from 'prop-types'; // ES6

const RowValue = ({ valueData }) => {
  const { key, name, unit, date, value } = valueData;
  return (
    <div className="row">
      <div className="col-12">
        <div className="border my-2 py-3 px-2 d-flex justify-content-between align-items-baseline bg-light">
          <div className="text-body">{key}</div>
          <div className="text-body">{name}</div>
          <div className="text-body">{unit}</div>
          <div className="text-body">{date} </div>
          <div className="text-body">{value} </div>
          <div>
            <button type="button" className="btn btn-primary">
              Ver detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

RowValue.propTypes = {
  valueData: PropTypes.object,
};

export default RowValue;
