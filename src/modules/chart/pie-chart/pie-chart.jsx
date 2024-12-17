import React from "react";
import { Pie } from "react-chartjs-2";
import {Chart, ArcElement } from "chart.js";

export const PieChart = ({ chartData }) => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Pie Chart</h2>
      {Chart.register(
        ArcElement,
        <Pie
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Users Gained between 2016-2020",
              },
            },
          }}
        />
      )}
    </div>
  );
};
