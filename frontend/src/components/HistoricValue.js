// Dependency
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import HistoricTable from './HistoricTable';
import Loading from './Loading';
import Pagination from './Pagination';

const HistoricValue = ({ historicData, show }) => {
  const [state, setState] = useState({
    loading: !!historicData.length,
    data: [...historicData],
    dataShow: [],
    perPage: 20,
    pagination: {
      current: 0,
      total: 0,
    },
  });

  useEffect(() => {
    setState({
      ...state,
      loading: historicData.length,
      data: [...historicData],
      dataShow: historicData.slice(
        state.pagination.current * state.perPage,
        (state.pagination.current + 1) * state.perPage
      ),
      pagination: {
        current: 0,
        total: Math.round(historicData.length / state.perPage),
      },
    });
  }, [historicData]);

  useEffect(() => {
    setState({
      ...state,
      dataShow: historicData.slice(
        state.pagination.current * state.perPage,
        (state.pagination.current + 1) * state.perPage
      ),
    });
  }, [state.pagination.current]);

  const handlePagination = (page) => {
    setState({
      ...state,
      pagination: {
        ...state.pagination,
        current: page,
      },
    });
  };

  return (
    <div className={` mt-3 collapse ${show ? 'show' : undefined}`}>
      <div className="card card-body">
        {state.loading ? <HistoricTable historicData={state.dataShow} /> : <Loading />}

        <div className="row justify-content-center">
          <div className="col-12 col-md-8 mt-3 text-center d-flex justify-content-center">
            <Pagination
              current={state.pagination.current}
              totalPage={state.pagination.total}
              handlePagination={handlePagination}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

HistoricValue.defaultProps = {
  historicData: [],
};

HistoricValue.propTypes = {
  historicData: PropTypes.array,
  show: PropTypes.bool,
};

export default HistoricValue;
