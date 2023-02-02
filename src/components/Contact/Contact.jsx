import React from 'react'
import './Contact.scss'
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";


const Contact = () => {
  return (
    <div className='contact'>
        <div className='wrapper'>
            <span>Email Us:</span>
                <div className="mail">
                    <input type="text" placeholder='Write your e-mail....'/>
                    <button>Send Us Email</button>
                </div>
                <div className="icons">
                <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
          <PinterestIcon />
                </div>
         
        </div>
    </div>
  )
}

export default Contact