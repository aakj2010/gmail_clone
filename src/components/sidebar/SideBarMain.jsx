import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './SideBar.css'
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
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


function SideBarMain() {
    const [show, setShow] = useState(false);
    const [innerText, setInnerText] = useState("More");
    const [classt, setClasst] = useState(<KeyboardArrowDownIcon />);

    const ShowMore = () => {
        setShow(!show)
    }
    useEffect(() => {
        show ? setInnerText("Less") : setInnerText("More");
        show ? setClasst(<KeyboardArrowUpIcon />) : setClasst(<KeyboardArrowDownIcon />);
    }, [show]);

    return (
        <div>
            <input type='checkbox' id='menu' />
            <label className='icon' htmlFor='menu'>
                <div className='menu'>

                </div>
            </label>
            <nav>
                <ul>
                    <Link className='link' to='inbox'>
                        <li className='list-items'>
                            <MailOutlinedIcon fontSize='small' />
                            <span className='menu-text'>Inbox</span>
                            <span className='mailcount'>99</span>
                        </li></Link>
                    <Link className='link' to='starred'>
                        <li className='list-items'>
                            <StarOutlineOutlinedIcon fontSize='small' />
                            <span className='menu-text'>Starred</span>
                        </li></Link>
                    <li className='list-items'>
                        <WatchLaterOutlinedIcon fontSize='small' />
                        <span className='menu-text'>Snooze</span>
                    </li>
                    <li className='list-items'>
                        <LabelOutlinedIcon fontSize='small' />
                        <span className='menu-text'>Important</span>
                    </li>
                    <Link className='link' to='sent'>
                        <li className='list-items'>
                            <SendOutlinedIcon fontSize='small' />
                            <span className='menu-text'>Sent</span>
                        </li></Link>
                    <li className='list-items'>
                        <InsertDriveFileOutlinedIcon fontSize='small' />
                        <span className='menu-text'>Drafts</span>
                    </li>

                    <li className='list-items'>
                        <LabelOutlinedIcon fontSize='small' />
                        <span className='menu-text'>Categories</span>
                    </li>
                    <li className='list-items' onClick={ShowMore}>
                        {classt}
                        <span className='menu-text'>{innerText}</span>
                    </li>
                    {
                        show ? (
                            <>
                                <li className='list-items'>
                                    <EmailOutlinedIcon fontSize='small' />
                                    <span className='menu-text'>All Mail</span>
                                    <span className='mailcount'>195</span>
                                </li>
                                <li className='list-items'>
                                    <ScheduleSendOutlinedIcon fontSize='small' />
                                    <span className='menu-text'>Sheduled</span>
                                </li>
                                <li className='list-items'>
                                    <ScheduleSendOutlinedIcon fontSize='small' />
                                    <span className='menu-text'>Spam</span>
                                </li>

                                <li className='list-items'>
                                    <DeleteOutlineOutlinedIcon fontSize='small' />
                                    <span className='menu-text'>Bin</span>
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