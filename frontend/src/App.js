// Dependency
import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';

// Utils
import { getValues } from './Utils/actions';

// Components
import Loading from './components/Loading';
import RowValue from './components/RowValue';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [dataValue, setDataValue] = useState([]);
  const ref = useRef(moment().format('DD-MM-YYYY'));

  useEffect(() => {
    const callGetValues = async () => {
      const res = await getValues();
      setLoading(false);
      setDataValue(res);
    };
    callGetValues();
  }, []);

  const renderValues = () => {
    return dataValue.map((data) => {
      return <RowValue valueData={data} key={data.key} />;
    });
  };

  return (
    <>
      <nav className="navbar  custom-nav">
        <a className="navbar-brand" href="/">
          Caso BICE {process.env.BASE_UR}
        </a>
      </nav>
      <div className="container">
        <h1 className="my-3">
          Indicadores diarios
          <span className="badge badge-custom ml-3">{ref.current}</span>
        </h1>

        {loading ? <Loading /> : renderValues()}
      </div>
    </>
  );
};

export default App;
