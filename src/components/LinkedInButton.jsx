import LinkedInIcon from "../assets/linkedinWhiteOuter.png"

function handleClick(){
    window.location.href = "https:/www.linkedin.com/in/matt-blackburn-bscs-se-csm-577495213"
}

export default function LinkedInButton(){

    return(
        <button className="linkedin-style" onClick={handleClick}>
            <img className="linkedin-icon-style" src={LinkedInIcon} alt="LinkedIn Button" />
            LinkedIn
        </button>
    )

}