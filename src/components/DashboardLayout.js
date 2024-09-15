import React from 'react';
import KeyMetricsWrapper from './KeyMetricsWrapper';
import DataVisualization from './DataVisualization';
import './css/DashboardLayout.css';  

const DashboardLayout = () => {
  return (
    <div>
      <div className="background-image">
        <h1 className="main-heading">Streamify</h1>
      </div>

      <section className="metrics-section">
        <h4 className="section-title">Key Metrics</h4>
        <KeyMetricsWrapper />
      </section>

      <section className="visualization-section">
        <h4 className="section-title">Data Visualizations</h4>
        <DataVisualization />
      </section>
    </div>
  );
};

export default DashboardLayout;
