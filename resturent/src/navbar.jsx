import React from "react";


function Navbar(){


    return (
        <nav id="nav-container">
            <ul id="nav-links">
               <div><li className="nav-option">HOME</li></div>
               <div><li className="nav-option">MENU</li></div>
               <div><li className="nav-option">BOOKINGS</li></div>
               <div><li className="nav-option">REVIEW</li></div>
            </ul>
            <div id="btn-container">
            <div id="order-btn">ORDER NOW</div>
            </div>
        </nav>
    )


}


export default Navbar;