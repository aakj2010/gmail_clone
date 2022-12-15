import React from 'react'
import './Emailview.css'
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';

function Starred() {
    const social = [
        {
          id: 1,
          company: "Facebook",
          Title: "Upload you Profile Photo",
          dummy:
            "Ankit can you help us improve our Digital Launchpad We want to make the Social Shifters Digital Launchpad program (part of the Global Innovation Challenge) the best possible experience for changemakers like you around the world Like any good social startup we'll never stop iterating and improving but we cant do it alone Help us to help others like you create social and environmental impact take our short survey We have 100 Canva Pro licences and limited edition Social Shifters T's to giveaway complete the survey by Friday 16th Oct to be entered to win",
        },
        {
          id: 3,
          company: "Instagram",
          Title: "Do't do this with me",
          dummy:
            "Ankit can you help us improve our Digital Launchpad We want to make the Social Shifters Digital Launchpad program (part of the Global Innovation Challenge) the best possible experience for changemakers like you around the world Like any good social startup we'll never stop iterating and improving but we cant do it alone Help us to help others like you create social and environmental impact take our short survey We have 100 Canva Pro licences and limited edition Social Shifters T's to giveaway complete the survey by Friday 16th Oct to be entered to win",
        },
        {
          id: 4,
          company: "Instagram Reels",
          Title: "Upload your video",
          dummy:
            "Ankit can you help us improve our Digital Launchpad We want to make the Social Shifters Digital Launchpad program (part of the Global Innovation Challenge) the best possible experience for changemakers like you around the world Like any good social startup we'll never stop iterating and improving but we cant do it alone Help us to help others like you create social and environmental impact take our short survey We have 100 Canva Pro licences and limited edition Social Shifters T's to giveaway complete the survey by Friday 16th Oct to be entered to win",
        },
        {
          id: 6,
          company: "Apple",
          Title: "Do not use Google Assistant",
          dummy:
            "Ankit can you help us improve our Digital Launchpad We want to make the Social Shifters Digital Launchpad program (part of the Global Innovation Challenge) the best possible experience for changemakers like you around the world Like any good social startup we'll never stop iterating and improving but we cant do it alone Help us to help others like you create social and environmental impact take our short survey We have 100 Canva Pro licences and limited edition Social Shifters T's to giveaway complete the survey by Friday 16th Oct to be entered to win",
        },
        {
          id: 7,
          company: "Intuit",
          Title: "My email is used in Foreign Country",
          dummy:
            "Ankit can you help us improve our Digital Launchpad We want to make the Social Shifters Digital Launchpad program (part of the Global Innovation Challenge) the best possible experience for changemakers like you around the world Like any good social startup we'll never stop iterating and improving but we cant do it alone Help us to help others like you create social and environmental impact take our short survey We have 100 Canva Pro licences and limited edition Social Shifters T's to giveaway complete the survey by Friday 16th Oct to be entered to win",
        },
        {
          id: 8,
          company: "Walmart",
          Title: "Most Active Employee - Thrifty Kapila",
          dummy:
            "Ankit can you help us improve our Digital Launchpad We want to make the Social Shifters Digital Launchpad program (part of the Global Innovation Challenge) the best possible experience for changemakers like you around the world Like any good social startup we'll never stop iterating and improving but we cant do it alone Help us to help others like you create social and environmental impact take our short survey We have 100 Canva Pro licences and limited edition Social Shifters T's to giveaway complete the survey by Friday 16th Oct to be entered to win",
        },
        {
          id: 9,
          company: "Hacker Earth",
          Title: "Nikhil stop sending the mail",
          dummy:
            "Ankit can you help us improve our Digital Launchpad We want to make the Social Shifters Digital Launchpad program (part of the Global Innovation Challenge) the best possible experience for changemakers like you around the world Like any good social startup we'll never stop iterating and improving but we cant do it alone Help us to help others like you create social and environmental impact take our short survey We have 100 Canva Pro licences and limited edition Social Shifters T's to giveaway complete the survey by Friday 16th Oct to be entered to win",
        },
        {
          id: 10,
          company: "CodeChef",
          Title: "I comes under Unacademy",
          dummy:
            "Ankit can you help us improve our Digital Launchpad We want to make the Social Shifters Digital Launchpad program (part of the Global Innovation Challenge) the best possible experience for changemakers like you around the world Like any good social startup we'll never stop iterating and improving but we cant do it alone Help us to help others like you create social and environmental impact take our short survey We have 100 Canva Pro licences and limited edition Social Shifters T's to giveaway complete the survey by Friday 16th Oct to be entered to win",
        },
        {
          id: 11,
          company: "GeeksForGeeks",
          Title: "Ace you Dsa Interview",
          dummy:
            "Ankit can you help us improve our Digital Launchpad We want to make the Social Shifters Digital Launchpad program (part of the Global Innovation Challenge) the best possible experience for changemakers like you around the world Like any good social startup we'll never stop iterating and improving but we cant do it alone Help us to help others like you create social and environmental impact take our short survey We have 100 Canva Pro licences and limited edition Social Shifters T's to giveaway complete the survey by Friday 16th Oct to be entered to win",
        },
        {
          id: 12,
          company: "Zoho",
          Title: "Ace you Dsa Interview",
          dummy:
            "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
        },
        {
          id: 13,
          company: "Razorpay",
          Title: "Ace you Dsa Interview",
          dummy:
            "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
        },
        {
          id: 14,
          company: "Paytm",
          Title: "Ace you Dsa Interview",
          dummy:
            "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
        },
        {
          id: 15,
          company: "Google",
          Title: "Ace you Dsa Interview",
          dummy:
            "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
        },
        {
          id: 16,
          company: "Apple",
          Title: "Ace you Dsa Interview",
          dummy:
            "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
        },
        {
          id: 17,
          company: "CRED",
          Title: "Ace you Dsa Interview",
          dummy:
            "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
        },
        {
          id: 18,
          company: "MongoDB",
          Title: "Ace you Dsa Interview",
          dummy:
            "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
        },
        {
          id: 19,
          company: "DE Shaw",
          Title: "Ace you Dsa Interview",
          dummy:
            "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
        },
        {
          id: 20,
          company: "Media.net",
          Title: "Ace you Dsa Interview",
          dummy:
            "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
        },
        {
          id: 21,
          company: "Oracle",
          Title: "Ace you Dsa Interview",
          dummy:
            "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
        },
        {
          id: 22,
          company: "Walmart",
          Title: "Ace you Dsa Interview",
          dummy:
            "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
        },
        {
          id: 23,
          company: "GeeksForGeeks",
          Title: "Ace you Dsa Interview",
          dummy:
            "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
        },
        {
          id: 24,
          company: "Groww App",
          Title: "Ace you Dsa Interview",
          dummy:
            "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
        },
        {
          id: 25,
          company: "Technical Gurugi",
          Title: "Ace you Dsa Interview",
          dummy:
            "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
        },
        {
          id: 28,
          company: "BB ki vines",
          Title: "Ace you Dsa Interview",
          dummy:
            "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
        },
        {
          id: 26,
          company: "Carry Minati",
          Title: "Ace you Dsa Interview",
          dummy:
            "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
        },
        {
          id: 27,
          company: "Harsh Beniwal",
          Title: "Ace you Dsa Interview",
          dummy:
            "Hey Geek Twice the benefits and double the fun with only one contest We are providing you with a platform where you’ll be participating with the sharpest minds out there in a time based environment These questions are bases on the real question that are asked in Expedia’s technical round. So along with strengthening your coding skills, you will also strengthen your chance to join one of the best companies, Expedia So do not miss this FREE opportunity and",
        },
      ];
    return (
        <div className='tabledata mailview'>
        <table>
          <tbody className='tbody' >
            {
              social.map((email) => {
                return <tr className='tr'style={{ borderBottom: '.5px solid black' }}>
                  <td className='tdbutton'>
                    <button className="tdbtn"><CheckBoxOutlineBlankOutlinedIcon fontSize='small' /></button>
                    <button className="tdbtn"><StarOutlineOutlinedIcon fontSize='small' /></button>
                    <button className="tdbtn"><LabelImportantOutlinedIcon fontSize='small' /></button>
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