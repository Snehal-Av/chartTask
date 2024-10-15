import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';

const ChartContext=createContext();

export const ContextAll = ({children}) => {
    const [chartData, setChartData] = useState([]);
    const [currentPage,setCurrentPage]=useState(1)

  const rowsPerPage=10;
  const lastIndex=currentPage*rowsPerPage;
  const firstIndex=lastIndex-rowsPerPage;

  const allData=chartData.slice(firstIndex,lastIndex);

  const prevPage = () => {
    if (currentPage === 1) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage - 1);
      if (currentPage <= 0) {
        currentPage = 1;
        setCurrentPage(currentPage);
      }
    }
  };
  const nextPage = () => {
    let pageNum = currentPage + 1;
    setCurrentPage(pageNum);
    if (pageNum >= 10) {
      pageNum = 10;
      setCurrentPage(pageNum);
    }
  };

  const getAllData = async () => {
    const result = await axios.get(`http://localhost:5000/radnum?pageNum=${currentPage}`);
    return result.data;
  };
  useEffect(() => {
    const loadData = async () => {
      const initialData = await getAllData();
      setChartData([initialData]);
    };

    loadData();

    const interval = setInterval(async () => {
      const newData = await getAllData();
      setChartData((prevData) => [...prevData, newData]);
    }, 30000);
    return () => clearInterval(interval);
  }, []);
  return (
  <ChartContext.Provider value={{allData,prevPage,nextPage,currentPage}}>
    {children}
  </ChartContext.Provider>
  )
}

export default ChartContext