// Dependency
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import HistoricValue from './HistoricValue';
import { getValuesByKey } from '../Utils/actions';

const RowValue = ({ valueData }) => {
  const { key, name, dateParse, valueParse } = valueData;
  const [openCollapse, setOpenCollapse] = useState(false);
  const [historicData, setHistoricData] = useState([]);

  const getHistoric = async () => {
    setOpenCollapse((prev) => !prev);
    if (!historicData.length) {
      const res = await getValuesByKey(key);
      setHistoricData([...res]);
    }
  };

  return (
    <div className="row">
      <div className="col-12">
        <div className="border my-2 py-3 px-2 bg-light text-body">
          <div className="row justify-content-between text-center">
            <div className="col-12 col-md-3 d-flex align-items-center font-weight-bold">{name}</div>
            <div className="col-12 col-md-3  d-flex align-items-center">{valueParse}</div>
            <div className="col-12 col-md-3 col-md-3 d-flex align-items-center">{dateParse}</div>
            <div className="col-12 col-md-3 d-flex align-items-center">
              <button
                className="btn  btn-custom"
                type="button"
                data-testid="btn-get-historic"
                onClick={() => getHistoric()}
              >
                Historico
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-12">
              <HistoricValue historicData={historicData} show={openCollapse} />
            </div>
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
