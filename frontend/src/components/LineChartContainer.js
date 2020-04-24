import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import PropTypes from 'prop-types';

const LineChartContainer = ({ historicData }) => {
  return (
    <ResponsiveContainer width="99%" aspect={3}>
      <LineChart
        width={800}
        height={400}
        data={historicData}
        margin={{ top: 40, right: 40, bottom: 20, left: 20 }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="date" />
        <YAxis dataKey="value" domain={['auto', 'auto']} />
        <Tooltip />
        <Line dataKey="value" label="Valor" stroke="#ff7300" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

LineChartContainer.propTypes = {
  historicData: PropTypes.array,
};

export default LineChartContainer;
