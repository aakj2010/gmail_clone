import React, { useContext } from 'react'
import './Emailview.css'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { SentData } from '../data/Primary'
import ToggleContext from '../Context/ToggleContext'
import { MdLabelImportantOutline } from 'react-icons/md';
import MetaData from '../header/MetaData';

function Sent() {
    let context = useContext(ToggleContext)
    // console.log(context.query);
    const keys = ['Title', 'company']
    const search = (data) => {
        return data.filter((item) =>
            keys.some(key => item[key].toLowerCase().includes(context.query))
        )
    }
    // const search = (data) => {
    //     return data.filter(item => item.company.toLowerCase().includes(context.query) ||
    //         item.Title.toLowerCase().includes(context.query) ||
    //         item.dummy.toLowerCase().includes(context.query)
    //     )
    // }
    const FilteredData = search(SentData)

    return (
        <div className='tabledata mailview'>
            <MetaData title={'Sent items'} />
            <table>
                <tbody className='tbody' style={{ borderBottom: '.5px solid lightgrey' }}>
                    {
                        FilteredData.map((sent) => {
                            return <tr className='tr'>
                                <td className='tdbutton'>
                                    <button className="tdbtn"><CheckBoxOutlineBlankOutlinedIcon fontSize='small' /></button>
                                    <button className="tdbtn"><StarOutlineOutlinedIcon fontSize='small' color='' /></button>
                                    <button className="tdbtn"><MdLabelImportantOutline /></button>
                                </td>
                                <td className='tdcompany'>{sent.company}</td>
                                <td className='tdtitle'>{sent.Title}</td>
                                <td className='tddummy'>{sent.dummy}</td>
                                <td className='tdtime'>{sent.TimeStamp}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Sent