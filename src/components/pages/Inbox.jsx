import React, { useContext } from 'react'
import './Emailview.css'
import ToggleContext from '../Context/ToggleContext'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import { Starred, InboxData, In} from '../data/Primary'
import { MdLabelImportantOutline} from 'react-icons/md';
import MetaData from '../header/MetaData';


function Inbox() {
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
  const FilteredData = search(InboxData)

  return (
    <div className='tabledata mailview'>
      <MetaData title={'Inbox'} />
      <table>
        <tbody className='tbody' >
          {
            FilteredData.map((product) => {
              return <tr className='tr' key={product.id} style={{ borderBottom: '.5px solid lightgrey' }}>
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

export default Inbox