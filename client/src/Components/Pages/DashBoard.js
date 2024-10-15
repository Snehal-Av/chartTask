import React from "react";
import BarChart from "../Charts/BarChart";
import DoughtutChart from "../Charts/DoughutChart";
import LineChart from "../Charts/LineChart";
import {
  Filter7,
  Forward30,
  PieChart,
  Score,
  Update,
} from "@mui/icons-material";
import TableList from "./TableList";

const DashBoard = () => {
  return (
    <div>
      <div className="box-carts row  mt-2 mx-3">
        <div className="row dash-boxes d-flex">
          <div className="col-lg-4 col-sm-12 box-1 ">
            <Score className="mx-5" />
            <h3>10</h3>
            <p>Random Number</p>
          </div>
          <div className="box-1 col-lg-4 col-sm-12">
            <Update className="mx-5" />
            <h3>10</h3>
            <p>Random Number</p>
          </div>
          <div className="col-lg-3 col-sm-12">
            <div className="box-2">
              box1
            </div>
            <div className="box-2">
              box1
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="d-chart col-lg-8 mt-3 col-sm-12">
          <BarChart />
        </div>
        <div class="p-chart col-lg-3 mx-2 mt-3 col-sm-12">
         <TableList/>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
