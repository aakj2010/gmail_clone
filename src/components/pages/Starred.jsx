import React, { useContext } from 'react'
import './Emailview.css'
import { yellow } from '@mui/material/colors';
import StarIcon from '@mui/icons-material/Star';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { StarredData} from '../data/Primary'
import ToggleContext from '../Context/ToggleContext'
import { MdLabelImportantOutline} from 'react-icons/md';

function Starred() {
  let context = useContext(ToggleContext)
  // console.log(context.query);
  const keys = ['Title', 'company']


  // const search = (data) => {
  //   return data.filter(item => item.company.toLowerCase().includes(context.query) ||
  //     item.Title.toLowerCase().includes(context.query) ||
  //     item.dummy.toLowerCase().includes(context.query)
  //   )
  // }
  const search = (data) => {
    return data.filter((item) =>
      keys.some(key => item[key].toLowerCase().includes(context.query))
    )
  }
  const FilteredData = search(StarredData)

  return (
    <div className='tabledata mailview'>
      <table>
        <tbody className='tbody' >
          {
            FilteredData.map((email) => {
              return <tr className='tr' key={email.id} style={{ borderBottom: '.5px solid black' }}>
                <td className='tdbutton'>
                  <button className="tdbtn"><CheckBoxOutlineBlankOutlinedIcon fontSize='small' /></button>
                  <button className="tdbtn"><StarIcon fontSize='small' sx={{ color: yellow[500] }} /></button>
                  <button className="tdbtn"><MdLabelImportantOutline /></button>
                </td>
                <td className='tdcompany' >{email.company}</td>
                <td className='tdtitle' >{email.Title}</td>
                <td className='tddummy' >{email.dummy}</td>
                <td className='tdtime'>{email.TimeStamp}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Starred