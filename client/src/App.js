import logo from './logo.svg';
import './App.css';
import LineChart from './Components/Charts/LineChart';
import PieChart from './Components/Charts/PieChart';
import BarChart from './Components/Charts/BarChart';
import DoughtutChart from './Components/Charts/DoughutChart';
import { Route, Routes } from 'react-router';
import TableList from './Components/Pages/TableList';
import DashBoard from './Components/Pages/DashBoard';
import NavBar from './Components/Pages/NavBar';
import SideBar from './Components/Pages/SideBar';
import RadialChart from './Components/Charts/RadarChart';
import RadarChart from './Components/Charts/RadarChart';

function App() {
  return (
    <div className="container d-flex">
      <SideBar/>
     <div>
      {/* <NavBar /> */}
     
     <Routes>
     <Route path='/dashboard' element={<DashBoard/>}/>
      <Route path='/bar' element={<BarChart/>}/>
      <Route path='/line' element={ <LineChart/>}/>
      <Route path='/pie' element={ <PieChart/>}/>
      <Route path='/dchart' element={<DoughtutChart/>}/>
      <Route path='/list' element={<TableList/>}/>
      <Route path='/radar' element={<RadarChart/>}/>
     </Routes>
     </div>
    
    
     
    </div>
  );
}

export default App;
