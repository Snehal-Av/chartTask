import {
  BarChart,
  DonutLarge,
  FormatListBulletedRounded,
  InsertChart,
  Menu,
  PieChart,
  SpaceDashboard,
  StackedLineChart,
  StackedLineChartOutlined,
  TrackChanges,
} from "@mui/icons-material";

import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="title">
        <h3>DashBoard</h3>
      </div>
      <ul>
        <div className="d-flex">
          <div className="icon">
            {" "}
            <SpaceDashboard className="me-2" />
          </div>
          <p>
            <Link to="/dashboard">Dashboard</Link>
          </p>
        </div>
        <div className="d-flex">
          <div className="icon">
            {" "}
            <FormatListBulletedRounded className="me-2" />
          </div>
          <p>
            <Link to="/list">List Of Data</Link>
          </p>
        </div>
        <div className="d-flex">
          <div className="icon">
            <StackedLineChartOutlined className="me-2" />
          </div>
          <p>
            <Link to="/line">Line Chart</Link>
          </p>
        </div>
        <div className="d-flex">
          <div className="icon">
            <BarChart className="me-2" />
          </div>
          <p>
            <Link to="/bar">Bar Chart</Link>
          </p>
        </div>
        <div className="d-flex">
          <div className="icon">
            <PieChart className="me-2" />
          </div>
          <p>
            <Link to="/pie">Pie Chart</Link>
          </p>
        </div>
        <div className="d-flex">
          <div className="icon">
            <DonutLarge className="me-2" />
          </div>
          <p>
            <Link to="/dchart">Doughut Charts</Link>
          </p>
        </div>
        <div className="d-flex">
          <div className="icon">
            <TrackChanges className="me-2" />
          </div>
          <p>
            <Link to="/radar">Radar Chart</Link>
          </p>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
