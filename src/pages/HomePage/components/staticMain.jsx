import { Area } from '@ant-design/charts';
import React from 'react';

const StaticMainChart = (props) => {
  const { data } = props;

  const config = {
    data,
    xField: 'row',
    yField: 'value',
    seriesField: 'name',
    legend: {
      position: 'top',
    },
    color: ({ name }) => {
      switch (name) {
        case 'ZeroMain':
          return '#9BE8E8';
        case 'MeasureMain':
          return '#9E9BEB';
      }
    },
    slider: {
      start: 0.1,
      end: 0.9,
    },

    smooth: false,
  };

  return <Area {...config} />;
};

export default StaticMainChart;
