/* eslint-disable react-hooks/exhaustive-deps */
// Dependency
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Components
import HistoricTable from './HistoricTable';
import Loading from './Loading';
import Pagination from './Pagination';
import LineChartContainer from './LineChartContainer';

const HistoricValue = ({ historicData, show }) => {
  const [state, setState] = useState({
    loading: true,
    data: [],
    dataShow: [],
    perPage: 20,
    pagination: {
      current: 0,
      total: 0,
    },
  });

  useEffect(() => {
    const {
      perPage,
      pagination: { current },
    } = state;

    setState((prevState) => ({
      ...prevState,
      loading: historicData.length,
      data: [...historicData],
      dataShow: historicData.slice(current * perPage, (current + 1) * perPage),
      pagination: {
        current: 0,
        total: Math.round(historicData.length / state.perPage),
      },
    }));
  }, [historicData]);

  useEffect(() => {
    const {
      data,
      perPage,
      pagination: { current },
    } = state;

    setState((prevState) => ({
      ...prevState,
      dataShow: data.slice(current * perPage, (current + 1) * perPage),
    }));
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
      <div className="row">
        <div className="col-12 col-md-12">
          {!!historicData.length && <LineChartContainer historicData={historicData} />}
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
