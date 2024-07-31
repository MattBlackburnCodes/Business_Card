import EmailIcon from "../assets/mail.png"

function handleClick(){
    window.location.href = "mailto:contact@mattblackburncodes.com"
}

export default function EmailButton(){

    return(
        <button className="email-style" onClick={handleClick}>
            <img className="email-icon-style" src={EmailIcon} />
            Email
        </button>
    )
}