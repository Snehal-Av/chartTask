import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Bar, Doughnut, Line, Pie, PolarArea } from "react-chartjs-2";
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
  RadialLinearScale,
  CategoryScale,
  Title,
  LineElement,
  Tooltip,
  Legend,
  PointElement,
  ChartDataLabels
);

const AllCharts = () => {
  const width = WidthSize();
  const {allData}=useContext(ChartContext)
  const AllChartData = {
    labels: allData.map((item) => item.timeStamp),
    datasets: [
      {
        label: "random data",
        data: allData.map((item) => item.value),
        backgroundColor: "rgb(53, 138, 148)",
        borderWidth: 2,
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
    <div>
      <div style={{ width: "790px" }}>
        <Bar height={600} width={1070} data={AllChartData} options={options} />
      </div>
      <div style={{ width: "790px" }}>
        <Line data={AllChartData} options={options} />
      </div>
      <div style={{ width: "790px" }}>
        <Pie height={600} width={1070} data={AllChartData} options={options} />
      </div>
      <div style={{ width: "790px" }}>
        <Doughnut height={600} width={1070} data={AllChartData} options={options} />
      </div>
      <div style={{ width: "790px" }}>
        <PolarArea height={600} width={1070} data={AllChartData} options={options} />
      </div>
    </div>
  );
};

export default AllCharts;
