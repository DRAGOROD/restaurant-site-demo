import React from "react";
import Ep from './assets/ep.webp'
import Fu from './assets/fu.webp'
import Oh from './assets/oh.webp'
import Ol from './assets/ol.webp'


function Footer(){


    return (
        <>
    <div id="footer-container" >
        <div className="section-animation">
            <img src={Ol} alt="Footer Icons"/>
            <h3>Quick Links</h3>
            <p>Gallery</p>
            <p>Our Chefs</p>
            <p>Term Of Use</p>
            <p>Privacy Policy</p>
            <p></p>
        </div>
        <div className="section-animation">
            <img src={Ep} alt="Footer Icons"/>
            <h3>Events & Partys</h3>
            <p>Festivals</p>
            <p>Corporate Events</p>
            <p>Catering & Parties</p>
            <p>Book a Venue</p>
            <p></p>
        </div>
        <div className="section-animation">
            <img src={Oh} alt="Footer Icons"/>
             <h3>Opening Hours</h3>
            <p>Tuesday 10:00AM - 11:00 PM</p>
            <p>Wednessday 10:00AM - 11:00 PM</p>
            <p>Thursday 10:00AM - 11:00 PM</p>
            <p>Friday 10:00AM - 11:00 PM</p>
            <p>Saturday 10:00AM - 11:00 PM</p>
        </div>
        <div className="section-animation">
            <img src={Fu} alt="Footer Icons"/>
            <h3>Find Us</h3>
            <p>	B 1/e 19, Mohan Coop Indl Area</p>
            <p>Delhi, 110044</p>
            <p><a className="address-info" href="tel:5555599999">&#9742; (555)-5599-999</a></p>
            <p><a className="address-info" href="mailto:jitmishra40@gmail.com">&#9993; MyEmail@Gmail.com</a></p>
            <p></p>
        </div>
    </div>
    <p id="copyright">CopyRight &copy; 2026, Joy Misra- All Right Reserved</p>
        </>
    )

}


export default Footer;