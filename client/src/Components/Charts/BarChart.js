import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  Legend,
  LinearScale,
  Title,
  Tooltip,
  BarElement,
  PointElement,
  LineElement,
  scales,
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";
import WidthSize from "../WidthSize";
import ChartContext from "../ContextAll";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  CategoryScale,
  Title,
  LineElement,
  Tooltip,
  Legend,
  PointElement,
  ChartDataLabels
);

const BarChart = () => {
  const width = WidthSize();

  const {allData}=useContext(ChartContext)

  const BarChartData = {
    labels: allData.map((item) => item.timeStamp),
    datasets: [
      {
        label: "random data",
        data: allData.map((item) => item.value),
        backgroundColor: 'rgb(53, 138, 148)',
        borderWidth: 0,
        datalabels: {
          dispay: true,
          abchor: "end",
          align: "top",
          color: "white",
        },
      },
    ],
  };
  const options = {
    responsive: true,

    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          usePointStyle: true,
          // padding: width > 700 ? 30 : 10,
          font: {
            size: width > 700 ? 10 : 8,
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          dispay: false,
          drawBorder: false,
        },
        stack: true,
        ticks: {
          autoSkip: false,
        },
      },
      y: {
        title: {
          display: true,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
        bginAtZero: true,
      },
    },
  };

  return (
  <div className="bar">
     <Bar  height={520} width={700}
      data={BarChartData}
      options={options}
    />
</div>
  );
};

export default BarChart;
