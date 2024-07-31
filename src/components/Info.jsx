import React from "react"
import ProfilePic from "../assets/Profile_pic_two.jpg"
import MailIcon from "../assets/mail.png"
import LinkedInIcon from "../assets/linkedinWhiteOuter.png"
import LinkedInButton from "./LinkedInButton"
import EmailButton from "./EmailButton"


export default function Info(){
    return(
        <div className="info-body">
            <img className="image-style" src={ProfilePic} alt="Matt Blackburn's headshot"/>
            <h1 className="name-style">Matt Blackburn, BSCS-SE</h1>
            <p className="title-style">Frontend Developer</p>
            <p className="title-style">Scrum Master</p>
            <p className="website-style"><a href="https://www.mattblackburncodes.com" className="text-white">www.mattblackburncodes.com</a></p>
            <div className="button-style">
                <EmailButton />
                <LinkedInButton />
            </div>
        </div>
    )
}