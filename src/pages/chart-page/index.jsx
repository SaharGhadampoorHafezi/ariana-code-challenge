import React, { useState } from 'react';
import { PieChart } from '../../modules/chart';
import { userStore } from '../../store/store';

export const ChartPage = () => {
  const users = userStore((state) => state.users);
  const reactNum = users.filter((user) => user.skillsSet === 'react')
  const jsNum = users.filter((user) => user.skillsSet === 'js')
  const nextNum = users.filter((user) => user.skillsSet === 'next')
  const htmlNum = users.filter((user) => user.skillsSet === 'html')
  const cssNum = users.filter((user) => user.skillsSet === 'css')

  const [chartData, setChartData] = useState({
    labels: ["react", "js", "next", "html", "css"], 
    datasets: [
      {
        label: "Users Gained ",
        data: [reactNum, jsNum, nextNum, htmlNum, cssNum],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 2
      }
    ]
  })
  return (
    <div>
      <PieChart chartData={chartData}  />
    </div>
  );
}