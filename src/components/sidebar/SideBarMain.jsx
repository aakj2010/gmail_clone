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
import NotInterestedRoundedIcon from '@mui/icons-material/NotInterestedRounded';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AddIcon from '@mui/icons-material/Add';
import { StarredData, InboxData, SentData, AllMail } from '../data/Primary'


function SideBarMain() {
    const [bgcolor, setBgcolor] = useState('black');
    const [textcolor, setTextcolor] = useState('white');

    function handleHighlightTab() {
        setBgcolor('Red');
        setTextcolor('black');
    }

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

    // let activeStyle = {
    //     backgroundColor: '#000',
    //     Color:'#fff'
    // };

    return (
        <div>
            <input type='checkbox' id='menu' />
            <label className='icon' htmlFor='menu'>
                <div className='menu'>

                </div>
            </label>
            <nav>
                <ul>
                    <Link className='link active' exact to='inbox'  >
                        <li className='list-items active' 
                        onSelect={handleHighlightTab} style={{ backgroundColor: { bgcolor }, color: { textcolor } }} >
                            <MailOutlinedIcon fontSize='small' />
                            <span className='menu-text'>Inbox</span>
                            <span className='mailcount'>{InboxData.length}</span>
                        </li></Link>
                    <Link className='link' to='starred' activeStyle={{ color: '#5754a8' }}>
                        <li className='list-items active'>
                            <StarOutlineOutlinedIcon fontSize='small' />
                            <span className='menu-text'>Starred</span>
                        </li></Link>
                    <li className='list-items ' activeStyle={{ color: '#5754a8' }}>
                        <WatchLaterOutlinedIcon fontSize='small' />
                        <span className='menu-text'>Snooze</span>
                    </li>
                    <li className='list-items' >
                        <LabelOutlinedIcon fontSize='small' />
                        <span className='menu-text'>Important</span>
                    </li>
                    <Link className='link' to='sent'>
                        <li className='list-items active'>
                            <SendOutlinedIcon fontSize='small' />
                            <span className='menu-text'>Sent</span>
                        </li></Link>
                    <li className='list-items'>
                        <InsertDriveFileOutlinedIcon fontSize='small' />
                        <span className='menu-text'>Drafts</span>
                    </li>

                    <li className='list-items '>
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