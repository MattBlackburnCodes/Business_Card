import React from "react"
import TwitterIcon from "../assets/twitterIcon.png"
import FacebookIcon from "../assets/facebookIcon.png"
import InstagramIcon from "../assets/instagramIcon.png"
import GithubIcon from "../assets/githubIcon.png"


export default function Footer(){
    return(
        <div className="social-media-style">
            <img src={TwitterIcon}/>
            <img src={FacebookIcon}/>
            <img src={InstagramIcon}/>
            <img src={GithubIcon}/>
        </div>
    )
}