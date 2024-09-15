import React from 'react';

const KeyMetricCard = ({ title, value, icon }) => {
  return (
    <div
      style={{
        minWidth: '200px',
        margin: '20px',
        background: 'linear-gradient(145deg, #f0f0f0, #cacaca)',
        boxShadow: '5px 5px 15px #ccc, -5px -5px 15px #fff',
        borderRadius: '15px',
        transition: '0.3s',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <h4 style={{ fontSize: '18px', color: '#555', marginBottom: '10px' }}>{title}</h4>
      <h2 style={{ fontSize: '36px', color: '#333', fontWeight: 'bold' }}>
        {icon} {value}
      </h2>
    </div>
  );
};

export default KeyMetricCard;
