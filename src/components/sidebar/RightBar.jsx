import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import ToggleContext from '../Context/ToggleContext'

function RightBar({ righttoggle }) {
    let context = useContext(ToggleContext)
    return (
        <div className='rightbar'>
            {
                context.righttoggle ? <div className="" style={{ display: righttoggle ? 'block' : 'none' }}>
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-512.png" alt='calender' />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Google_Keep_icon_%282020%29.svg/1200px-Google_Keep_icon_%282020%29.svg.png" alt='keep' />
                    <img src="https://www.androidpolice.com/wp-content/uploads/2018/03/nexus2cee_new-tasks-icon.png" alt='tasks' />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1200px-Google_Contacts_icon.svg.png" alt='contact' />
                    <br />
                    <AddIcon />
                </div> : <></>
            }
        </div>
    )
}

export default RightBar