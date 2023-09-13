import React, { useContext } from 'react'
import './Emailview.css'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import KeyboardRoundedIcon from '@mui/icons-material/KeyboardRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
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
        <MetaData title={'Sent'} />
        <div className='inbox-head'>
        <div className='head-icons'>
          <button className="tdbtn"><CheckBoxOutlineBlankOutlinedIcon fontSize='small' /></button>
          <button className="tdbtn"><RefreshRoundedIcon fontSize='small' /></button>
          <button className="tdbtn"><MoreVertRoundedIcon fontSize='small' /></button>
        </div>
        <div className='head-icons'>
          <div className='pagination'><p>1-50 of 2681</p></div>
          <div className='head-icons'>
          <button className="tdbtn"><ChevronLeftRoundedIcon fontSize='small' /></button>
          <button className="tdbtn"><ChevronRightRoundedIcon fontSize='small' /></button>
          <button className="tdbtn"><KeyboardRoundedIcon  fontSize='small' /></button>
          <button className="arrow-btn"><ArrowDropDownRoundedIcon fontSize='medium' /></button>
          </div>
        </div>
      </div>
        <table>
          <tbody className='tbody' >
            {
              FilteredData.map((product) => {
                return <tr className='tr' key={product.id}>
                  <td className='tdbutton'>
                    <button className="tdbtn"><CheckBoxOutlineBlankOutlinedIcon fontSize='small' /></button>
                    <button className="tdbtn"><StarOutlineOutlinedIcon fontSize='small' /></button>
                    <button className="tdbtn"><MdLabelImportantOutline /></button>
                  </td>
                  <td className='tdcompany' >{product.company}</td>
                  <td className='tdtitle' >{product.Title}</td>
                  <td className='tddummy' >{product.dummy}</td>
                  <td className='tdtime'>{product.TimeStamp}</td>
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    )
}

export default Sent