import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Pagination from "./Pagination";
import ChartContext from "../ContextAll";

const TableList = () => {
  const {allData,prevPage,nextPage,currentPage}=useContext(ChartContext)
  return (
    <div className="t-data">
      <table class="table table-bordered">
       
          <tr>
            <th>Date &Time</th>
            <th>Random Number</th>
          </tr>
        
      
          {allData.map((data, i) => {
            return (
              <>
                <tr>
                  <td>{data.timeStamp}</td>
                  <td>{data.value}</td>
                </tr>
              </>
            );
          })}
   
      </table>
      <Pagination prevPage={prevPage} nextPage={nextPage} pageNo={currentPage}/>
    </div>
  );
};

export default TableList;
