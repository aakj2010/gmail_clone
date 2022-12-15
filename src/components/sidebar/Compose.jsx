import React from 'react'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
// import ToggleContext from '../Context/ToggleContext'

function Compose() {

    // let context = useContext(ToggleContext)

    return (
            <div className="compose">
                <EditOutlinedIcon style={{ paddingLeft: "8px", color: "#5f6368" }} />
                <button style={{ fontSize: '14px' }}>Compose</button>
            </div>
    )
}

export default Compose