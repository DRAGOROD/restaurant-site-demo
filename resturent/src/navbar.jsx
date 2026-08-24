import React from "react";
import { navContext } from "./App";
import { useContext } from "react";


function Navbar(){

let {homeRef,storeRef,bookingRef,reviewRef}=useContext(navContext)

    return (
        <nav id="nav-container">
            <ul id="nav-links">
               <div><li className="nav-option" onClick={()=>homeRef.current.scrollIntoView({behavior:"smooth"})}>HOME</li></div>
               <div><li className="nav-option" onClick={()=>storeRef.current.scrollIntoView({behavior:"smooth"})}>MENU</li></div>
               <div><li className="nav-option" onClick={()=>bookingRef.current.scrollIntoView({behavior:"smooth"})}>BOOKINGS</li></div>
               <div><li className="nav-option" onClick={()=>reviewRef.current.scrollIntoView({behavior:"smooth"})}>REVIEW</li></div>
            </ul>
            <div id="btn-container">
            <div id="order-btn">ORDER NOW</div>
            </div>
        </nav>
    )


}


export default Navbar;