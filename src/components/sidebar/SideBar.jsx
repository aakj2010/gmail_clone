import React, { useContext } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutline';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import ToggleContext from '../Context/ToggleContext'
import Compose from './Compose';
// import RightBar from './RightBar';
import SideBarMain from './SideBarMain';
import './SideBar.css'

function SideBar() {
    let context = useContext(ToggleContext)

    return (
        <div className="sidebar">
            <div className='sidebar-left'>
                <div className='left-icon active-dark'>
                    <button className='active-dark'><EmailIcon fontSize='small' /></button>
                    <span style={{ fontSize: '12px' }}>Mail</span>
                </div>
                <div className='left-icon'>
                    <button><ChatBubbleOutlinedIcon fontSize='small' /></button>
                    <span>Chat</span>
                </div>
                <div className='left-icon'>
                    <button><GroupsOutlinedIcon fontSize='small' /></button>
                    <span>Spaces</span>
                </div>
                <div className='left-icon'>
                    <button><VideocamOutlinedIcon fontSize='small' /></button>
                    <span>Meet</span>
                </div>
            </div>
            {
                <div className="sidebar-main" style={{ display: context.lefttoggle ? 'block' : 'none' }}>

                    <Compose lefttoggle={context.lefttoggle} />
                    <div className="sidebar-listitems">
                        <SideBarMain lefttoggle={context.lefttoggle} />
                    </div> : <></>
                </div>

            }

            {/* <div className="mailview">
                <Primary />
            </div> */}

            {/* <div className='rightbar-btn'>
                {
                    context.righttoggle ?
                        <button onClick={context.ShowRightBar} ><ChevronRightOutlinedIcon /></button> :
                        <> <button onClick={context.ShowRightBar} ><ChevronLeftOutlinedIcon /></button>
                            <div className='rightbar'><RightBar /></div></>
                }
            </div> */}

        </div>
    )
}

export default SideBar