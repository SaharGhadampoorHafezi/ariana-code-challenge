import React, { useState } from 'react';
import { PieChart } from '../../modules/chart';
import { userStore } from '../../store/store';

export const ChartPage = () => {
  const users = userStore((state) => state.users);
  
  // Count users per skill
  const reactNum = users.filter((user) => user.skillsSet === 'react').length;
  const jsNum = users.filter((user) => user.skillsSet === 'js').length;
  const nextNum = users.filter((user) => user.skillsSet === 'next').length;
  const htmlNum = users.filter((user) => user.skillsSet === 'html').length;
  const cssNum = users.filter((user) => user.skillsSet === 'css').length;

  const [chartData, setChartData] = useState({
    labels: ["React", "JavaScript", "Next.js", "HTML", "CSS"], 
    datasets: [
      {
        label: "Users Gained",
        data: [reactNum, jsNum, nextNum, htmlNum, cssNum], // Use counts instead of arrays
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
  });

  return (
    <div>
      <PieChart chartData={chartData} />
    </div>
  );
}
