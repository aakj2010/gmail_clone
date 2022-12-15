import React from 'react'
import './Emailview.css'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';

function Inbox() {
  const Primary = [
    {
      id: 1,
      company: "GeeksForGeeks",
      Title: "Ace you Dsa Interview",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",

      TimeStamp: "22 dec"
    },
    {
      id: 3,
      company: "Amazon",
      Title: "Do not buy Flipkart Products",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",

      TimeStamp: "20 dec"
    },
    {
      id: 4,
      company: "Flipkart",
      Title: "Don't buy products from Amazon",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "19 dec"
    },
    {
      id: 6,
      company: "Apple",
      Title: "Do not use Google Assistant",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "17 dec"
    },
    {
      id: 7,
      company: "Intuit",
      Title: "My product is used in Foreign Country",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "15 dec"
    },
    {
      id: 8,
      company: "Walmart",
      Title: "Most Active Employee - Thrifty Kapila",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "15 dec"
    },
    {
      id: 9,
      company: "Hacker Earth",
      Title: "Nikhil stop sending the mail",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "14 dec"
    },
    {
      id: 10,
      company: "CodeChef",
      Title: "I comes under Unacademy",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "14 dec"
    },
    {
      id: 11,
      company: "Twitter",
      Title: "Ace you Dsa Interview",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "13 dec"
    },
    {
      id: 12,
      company: "Zoho",
      Title: "Ace you Dsa Interview",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "8 dec"
    },
    {
      id: 13,
      company: "Razorpay",
      Title: "Ace you Dsa Interview",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "7 dec"
    },
    {
      id: 14,
      company: "Paytm",
      Title: "Ace you Dsa Interview",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "5 dec"
    },
    {
      id: 15,
      company: "Google",
      Title: "Ace you Dsa Interview",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "6 dec"
    },
    {
      id: 16,
      company: "Apple",
      Title: "Ace you Dsa Interview",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: " 5 dec"
    },
    {
      id: 17,
      company: "CRED",
      Title: "Ace you Dsa Interview",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: " 4 dec"
    },
    {
      id: 18,
      company: "MongoDB",
      Title: "Ace you Dsa Interview",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "3 dec"
    },
    {
      id: 19,
      company: "DE Shaw",
      Title: "Ace you Dsa Interview",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "2 dec"
    },
    {
      id: 20,
      company: "Media.net",
      Title: "Ace you Dsa Interview",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "2 dec"
    },
    {
      id: 21,
      company: "Oracle",
      Title: "Ace you Dsa Interview",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "1 dec"
    },
    {
      id: 22,
      company: "Walmart",
      Title: "Ace you Dsa Interview",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "10 dec"
    },
    {
      id: 23,
      company: "GeeksForGeeks",
      Title: "Ace you Dsa Interview",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "11 dec"
    },
    {
      id: 24,
      company: "Groww App",
      Title: "Ace you Dsa Interview",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "7 dec"
    },
    {
      id: 25,
      company: "Technical Gurugi",
      Title: "Ace you Dsa Interview",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "6 dec",
    },
    {
      id: 28,
      company: "BB ki vines",
      Title: "Ace you Dsa Interview",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "8 dec",
    },
    {
      id: 26,
      company: "Carry Minati",
      Title: "Ace you Dsa Interview",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "9 dec",
    },
    {
      id: 27,
      company: "Harsh Beniwal",
      Title: "Ace you Dsa Interview",
      dummy:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
      TimeStamp: "10 dec",
    },
  ];

  return (
    <div className='tabledata mailview'>
      <table>
        <tbody className='tbody' >
          {
            Primary.map((product) => {
              return <tr className='tr'style={{ borderBottom: '.5px solid black' }}>
                {/* <td>{product.id}</td> */}
                <td className='tdbutton'>
                  <button className="tdbtn"><CheckBoxOutlineBlankOutlinedIcon fontSize='small' /></button>
                  <button className="tdbtn"><StarOutlineOutlinedIcon fontSize='small' /></button>
                  <button className="tdbtn"><LabelImportantOutlinedIcon fontSize='small' /></button>
                </td>
                <td className='tdcompany' >{product.company}</td>
                <td className='tdtitle' >{product.Title}</td>
                <td className='tddummy' >{product.dummy}</td>
                <td className='tdtime'>{product.TimeStamp}</td>
                {/* <td className='tdunvisible'>
                  <button className="tdbtn"><CheckBoxOutlineBlankOutlinedIcon fontSize='small' /></button>
                  <button className="tdbtn"><StarOutlineOutlinedIcon fontSize='small' /></button>
                  <button className="tdbtn"><LabelImportantOutlinedIcon fontSize='small' /></button>
                </td> */}
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Inbox