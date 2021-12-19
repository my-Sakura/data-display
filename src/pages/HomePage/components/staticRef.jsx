import { Area } from '@ant-design/charts';
import React from 'react';

const StaticRefChart = (props) => {
  const { data } = props;

  const config = {
    data,
    xField: 'row',
    yField: 'value',
    seriesField: 'name',
    legend: {
      position: 'top',
    },
    slider: {
      start: 0.1,
      end: 0.9,
    },
    color: ({ name }) => {
      switch (name) {
        case 'ZeroRef':
          return '#9BE8E8';
        case 'MeasureRef':
          return '#9E9BEB';
      }
    },
    smooth: false,
  };

  return <Area {...config} />;
};

export default StaticRefChart;
