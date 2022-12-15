import React from 'react'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom';
import './Portal.css'
import SideBar from '../sidebar/SideBar';
import RightBar from '../sidebar/RightBar';


function Portal() {
    return (
        <div id="wrapper">
            <Header />
            <div id="content-wrapper" className="d-flex">
                <div id='content'>
                    <SideBar />


                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default Portal
