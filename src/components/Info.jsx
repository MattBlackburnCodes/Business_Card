import React from "react"
import ProfilePic from "../assets/Profile_pic_two.jpg"
import MailIcon from "../assets/mail.png"
import LinkedInIcon from "../assets/linkedinWhiteOuter.png"


export default function Info(){
    return(
        <div className="info-body">
            <img className="image-style" src={ProfilePic} alt="Matt Blackburn's headshot"/>
            <h1 className="name-style">Matt Blackburn, BSCS-SE</h1>
            <p className="title-style">Frontend Developer</p>
            <p className="title-style">Scrum Master</p>
            <p className="website-style">www.matttblackburncodes.com</p>
            <div className="button-style">
                <div className="email-option-style">
                    
                    <button className="email-style">
                        <img className="email-icon-style" src={MailIcon} />
                        Email
                    </button>
                </div>
                <button className="linkedin-style">
                    <img className="linkedin-icon-style" src={LinkedInIcon} />
                    LinkedIn
                </button>
            </div>
        </div>
    )
}