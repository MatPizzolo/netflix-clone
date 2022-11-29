import React, {useEffect, useState} from 'react';
import ntflxLogo from './nlftxTLR.png';
import avatarNTFLX from './avatarNTFLX.png';

import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                 handleShow(true)
            } else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img 
                alt="Netflix Logo"
                src={ntflxLogo}
                className="nav__logo"
            />

            <img 
                alt="User Avatar Icon"
                src={avatarNTFLX}
                className="nav__avatar"
            />
        
        </div>
    )
}

export default Nav

