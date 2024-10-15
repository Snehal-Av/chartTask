import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Bar, Line, Radar } from "react-chartjs-2";
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
  RadialLinearScale,
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";
import WidthSize from "../WidthSize";
import ChartContext from "../ContextAll";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  CategoryScale,
  RadialLinearScale,
  Title,
  LineElement,
  Tooltip,
  Legend,
  PointElement,
  ChartDataLabels
);

const RadarChart = () => {
  const width = WidthSize();

  const {allData}=useContext(ChartContext)

  const BarChartData = {
    labels: allData.map((item) => item.timeStamp),
    datasets: [
      {
        label: "random data",
        data: allData.map((item) => item.value),
        backgroundColor: 'rgb(53, 138, 148)',
        borderWidth:2,
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
     <Radar height={500} width={1070}
      data={BarChartData}
      options={options}
    />
</div>
  );
};

export default RadarChart;
