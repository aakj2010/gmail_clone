import React from 'react'
import './Primary.css'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import Inbox from '../pages/Inbox';
function Primary() {
  const Primary = [
    {
      id: 1,
      company: "GeeksForGeeks",
      Title: "Ace you Dsa Interview",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 3,
      company: "Amazon",
      Title: "Do not buy Flipkart Products",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 4,
      company: "Flipkart",
      Title: "Don't buy products from Amazon",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 6,
      company: "Apple",
      Title: "Do not use Google Assistant",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 7,
      company: "Intuit",
      Title: "My product is used in Foreign Country",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 8,
      company: "Walmart",
      Title: "Most Active Employee - Thrifty Kapila",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 9,
      company: "Hacker Earth",
      Title: "Nikhil stop sending the mail",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 10,
      company: "CodeChef",
      Title: "I comes under Unacademy",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 11,
      company: "Twitter",
      Title: "Ace you Dsa Interview",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 12,
      company: "Zoho",
      Title: "Ace you Dsa Interview",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 13,
      company: "Razorpay",
      Title: "Ace you Dsa Interview",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 14,
      company: "Paytm",
      Title: "Ace you Dsa Interview",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 15,
      company: "Google",
      Title: "Ace you Dsa Interview",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 16,
      company: "Apple",
      Title: "Ace you Dsa Interview",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 17,
      company: "CRED",
      Title: "Ace you Dsa Interview",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 18,
      company: "MongoDB",
      Title: "Ace you Dsa Interview",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 19,
      company: "DE Shaw",
      Title: "Ace you Dsa Interview",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 20,
      company: "Media.net",
      Title: "Ace you Dsa Interview",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 21,
      company: "Oracle",
      Title: "Ace you Dsa Interview",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 22,
      company: "Walmart",
      Title: "Ace you Dsa Interview",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 23,
      company: "GeeksForGeeks",
      Title: "Ace you Dsa Interview",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 24,
      company: "Groww App",
      Title: "Ace you Dsa Interview",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 25,
      company: "Technical Gurugi",
      Title: "Ace you Dsa Interview",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 28,
      company: "BB ki vines",
      Title: "Ace you Dsa Interview",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 26,
      company: "Carry Minati",
      Title: "Ace you Dsa Interview",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
    {
      id: 27,
      company: "Harsh Beniwal",
      Title: "Ace you Dsa Interview",
      message:
        "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
    },
  ];
  return (
    <div className='tabledata'>
      <table>
        <tbody className='tbody' style={{borderBottom:'.5px solid black'}}>
          {
            Primary.map((email) => (
              <Inbox
              Title={email.Title}
              Message={email.message}
              Company={email.company}
            />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Primary
