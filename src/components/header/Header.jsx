import React, { useContext, useState } from 'react'
import './Header.css';
import './MediaQuery.css'
import MenuIcon from '@mui/icons-material/Menu';
import gmail from '../images/gmail.png'
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ToggleContext from '../Context/ToggleContext'

function Header() {

    let context = useContext(ToggleContext)
    console.log(context.query);
    return (
        <div>
            <div className='header-container'>

                <div className='logowith-menu'>
                    <div className='menu-icon'>
                        <button className='btn' onClick={context.ShowSideBar}><MenuIcon /></button>
                        {/* <span className='mainmenuhide'>Main menu</span> */}
                    </div>

                    <div className='logo'>
                        <img src={gmail} style={{ height: "20px" }} alt='gmail' />
                        <p className=''>Gmail</p>
                    </div>
                </div>

                <div className="search-wrapper " >
                    <div className="search_bar">
                        <button className='search-btn btn'><SearchIcon /></button>
                        <input type='text' 
                        className='search-input'
                        placeholder='Search in mails'
                        style={{ border: 'none' }}
                        onChange={e => context.setQuery(e.target.value)} />
                        <button className='search-btn tune-btn'><TuneIcon /></button>
                    </div>
                </div>

                <div className="icons-wrapper">
                    <button className='icon-btn'><HelpOutlineIcon /></button>
                    <button className='icon-btn'><SettingsIcon /></button>
                    <button className='icon-btn'><AppsIcon /></button>
                    <button className='icon-btn'><AccountCircleIcon /></button>
                </div>

            </div>



        </div>

    )
}

export default Header