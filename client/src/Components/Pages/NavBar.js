import React from 'react'
import {AccountBox, AccountCircle, FormatListBulletedRounded, InsertChart, SpaceDashboard,} from '@mui/icons-material'
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='navbar'>
        <ul >
            <li className='float-end'><Link to='/dashboard'><AccountCircle/></Link></li>
        </ul>
    </div>
  )
}

export default NavBar