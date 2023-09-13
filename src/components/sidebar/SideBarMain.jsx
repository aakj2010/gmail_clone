import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './SideBar.css'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import NotInterestedRoundedIcon from '@mui/icons-material/NotInterestedRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import InboxIcon from '@mui/icons-material/Inbox';

import AddIcon from '@mui/icons-material/Add';
import { InboxData, AllMail } from '../data/Primary'


function SideBarMain() {

    const [show, setShow] = useState(false);
    const [innerText, setInnerText] = useState("More");
    const [classt, setClasst] = useState(<KeyboardArrowDownIcon />);
    const [inbox, setinbox] = useState(<InboxOutlinedIcon />)
    const [inboxshow, setinboxShow] = useState(false);
    // const [isActive, setIsActive] = useState(false);


    const ShowMore = () => {
        setShow(!show)

    }

    const inboxIcon = () => {
        setinboxShow(!inboxshow)
    }

    useEffect(() => {
        show ? setInnerText("Less") : setInnerText("More");
        show ? setClasst(<KeyboardArrowUpIcon />) : setClasst(<KeyboardArrowDownIcon />);
        // show ? setClasst(<InboxOutlinedIcon />) : setClasst(<InboxIcon />);
        inboxshow ? setinbox(<InboxOutlinedIcon />) : setinbox(<InboxIcon />);


    }, [show, inboxshow]);

    return (
        <div className='sidebar-main'>
            <nav>
                <ul>

                    <li className="" onClick={inboxIcon}>
                        <NavLink className='list-items' to=''>
                            <InboxOutlinedIcon fontSize='small' className='icon' />
                            Inbox
                            <span className='mailcount'>{InboxData.length}</span>
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink className='list-items' to='starred'>
                            <StarOutlineOutlinedIcon fontSize='small' className='icon' />
                            Starred
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink className='list-items' to='snooze'>
                            <WatchLaterOutlinedIcon fontSize='small' className='icon' />
                            Snooze
                        </NavLink>
                    </li>
                    <li className='' >
                        <NavLink className='list-items' to='important'>
                            <LabelOutlinedIcon fontSize='small' className='icon' />
                            Important
                        </NavLink>
                    </li>

                    <li className=''>
                        <NavLink className='list-items' to='sent'>
                            <SendOutlinedIcon fontSize='small' className='icon' />
                            Sent
                        </NavLink>
                    </li>
                    <li className=''>
                        <NavLink className='list-items' to='drafts'>
                            <InsertDriveFileOutlinedIcon fontSize='small' className='icon' />
                            Drafts
                        </NavLink>
                    </li>

                    <li className=''>
                        <NavLink className='list-items' to='categories'>
                            <LabelOutlinedIcon fontSize='small' className='icon' />
                            Categories
                        </NavLink>
                    </li>
                    <li className=''style={{marginLeft: "18px" }} onClick={ShowMore}>
                        {classt}
                        <span className='menu-text'>{innerText}</span>
                    </li>
                    {
                        show ? (
                            <>
                                <li className='list-items'>
                                    <EmailOutlinedIcon fontSize='small' />
                                    <span className='menu-text'>All Mail</span>
                                    <span className='mailcount'>{AllMail}</span>
                                </li>
                                <li className='list-items'>
                                    <ScheduleSendOutlinedIcon fontSize='small' />
                                    <span className='menu-text'>Sheduled</span>
                                </li>
                                <li className='list-items'>
                                    <NotInterestedRoundedIcon fontSize='small' />
                                    <span className='menu-text'>Spam</span>
                                </li>
                                <li className='list-items'>
                                    <DeleteOutlineOutlinedIcon fontSize='small' />
                                    <span className='menu-text'>Bin</span>
                                </li>
                                <li className='list-items'>
                                    <SettingsOutlinedIcon fontSize='small' />
                                    <span className='menu-text'>Manage labels</span>
                                </li>
                                <li className='list-items'>
                                    <AddIcon fontSize='small' />
                                    <span className='menu-text'>Create new label</span>
                                </li>
                            </>

                        ) : ("")
                    }

                </ul>

            </nav>
        </div>
    )
}

export default SideBarMain