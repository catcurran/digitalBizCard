import React from "react"

export default function Info(){
    return (
        <div className="info-container">
            <img className="me" src="./images/cat-adler.png" />
            <h1 className="name">Cat Curran</h1> 
            <h3 className="title">UX Designer / Frontend Developer</h3>
            <a href="https://www.catcurran.com/" className="portfolio" target="_blank">catcurran.com</a>
            <div className="button-container">
                <a href="mailto:cat@catcurran.com">
                <button>email</button>
                </a>
            </div>
        </div>    
    )
}