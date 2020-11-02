import React, {useState, useEffect} from 'react'
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);

    useEffect(function(){
        window.addEventListener("scroll", function(){
            if(window.scrollY > 100){
                handleShow(true)
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_bg-dark"}`}>
            <h2 className="logo"> cl-hulu </h2>
            <img className="avatar" src="../avatar.png" alt="This you?"/>
        </div>
    )
}

export default Nav
