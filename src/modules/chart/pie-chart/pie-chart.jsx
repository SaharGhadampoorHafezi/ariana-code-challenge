import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels"; // Import the data labels plugin

// Register the ArcElement and data labels plugin outside of the component
Chart.register(ArcElement, ChartDataLabels);

export const PieChart = ({ chartData }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Skills Count",
            },
            legend: {
              display: true,
              position: "top", // Position of the legend
            },
            datalabels: {
              formatter: (value, context) => {
                const label = context.chart.data.labels[context.dataIndex];
                return `${label}: ${value}`; // Show label and value
              },
              color: "#fff", // Color of the labels
              font: {
                weight: "bold",
                size: "16",
              },
            },
          },
        }}
      />
    </div>
  );
};
