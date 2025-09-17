import React from 'react';
import './sparkline-chart.css';

const SparklineChart = ({ data, width = 100, height = 40, color = '#00d4aa' }) => {
  if (!data || data.length === 0) {
    return <div className="sparkline-placeholder">📈</div>;
  }

  // Find min and max values for scaling
  const minValue = Math.min(...data);
  const maxValue = Math.max(...data);
  const range = maxValue - minValue;

  // If all values are the same, show a flat line
  if (range === 0) {
    const y = height / 2;
    return (
      <svg width={width} height={height} className="sparkline-chart">
        <polyline
          points={data.map((_, index) => `${(index / (data.length - 1)) * width},${y}`).join(' ')}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  // Create points for the polyline
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - minValue) / range) * height;
    return `${x},${y}`;
  }).join(' ');

  // Determine if the trend is positive or negative
  const firstValue = data[0];
  const lastValue = data[data.length - 1];
  const isPositive = lastValue >= firstValue;
  const chartColor = isPositive ? '#00d4aa' : '#ea3943';

  return (
    <svg width={width} height={height} className="sparkline-chart">
      <polyline
        points={points}
        fill="none"
        stroke={chartColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SparklineChart;
