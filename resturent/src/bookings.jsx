import React, { useState } from "react"
import Bookings_Bg from'./assets/bookings_bg.mp4'
import Fbi from './assets/fbi.webp'
import Ii from './assets/ii.webp'
import Ti from './assets/ti.webp'

function Bookings(){

let faqs=[
    {
      id:'q1',
      question: "What are your opening hours?",
      answer: "We are open daily from 11:00 AM to 10:00 PM."
    },
    {
      id:'q2',
      question: "Do you offer vegetarian or vegan options?",
      answer: "Yes, we offer a variety of vegetarian and vegan dishes. Please ask our staff for the current menu options."
    },
    {
       id:'q3',
      question: "Do you have parking available?",
      answer: "Yes, parking is available for our customers. Please ask our staff for details about parking availability."
    },
    {
      idL:'q4',
      question: "Do you offer takeaway or delivery?",
      answer: "Yes, we offer takeaway and delivery. Delivery availability may depend on your location."
    }
]

let icons=[
    {
    name:'Twitter',
    src:Ti
    },
    {
    name:'Facebook',
    src:Fbi
    },
    {
    name:'Instagram',
    src:Ii
    } 
    ];

let [show,setShow]=useState(null)

function click(id){
  setShow(show===id?null:id)
}

return(
    <>
    <div id="bookings-container">
        <video src={Bookings_Bg} playsInline loop autoPlay id="bookings-bg" className="section-animation"/>
        <h2 id="bookings-heading" className="section-animation"><span>Book</span> <span>Your</span> <span>Table</span></h2>
        <div id="bookings-body">
            <div id="left-section">
                <div id="top-section">
               {faqs.map((v,i)=>
               <>
               <div className="section-animation" key={i} onClick={()=>click(v.id)}><span>{v.question}</span><span style={{display:"inline-block",transition:"0.3s ease",transform:show===v.id?"rotate(180deg)":"rotate(0deg)"}}>▼</span></div>
               {show===v.id && (<p>{v.answer}</p>)}
               </>
                )}
                </div>
                <div id="bottom-section">
                    <h4 className="section-animation">Connect With Us!</h4 >
                    <div id="icon-container">
                    {icons.map((v,i)=><img src={v.src} alt={v.name} key={i} className="section-animation"/>)}
                    </div>
                </div>
            </div>
            <div id="right-section">
                <form id="bookings-form" className="section-animation">
                    <h5 className="section-animation">Online Reservation</h5>
                    <div className="section-animation">
                        <label>NAME</label>
                        <input type="name" />
                    </div>
                    <div className="section-animation">
                        <label>PHONE</label>
                        <input type="number"/>
                    </div>
                    <select className="section-animation">
                        <option>1 Person</option>
                        <option>2 Person</option>
                        <option>3 Person</option>
                        <option>4 Person</option>
                        <option>More....</option>
                    </select>
                    <div id="date-time" className="section-animation">
                        <input type="date" value={new Date().toISOString().split('T')[0]}/> {/*current Date */}
                        <input type="time" value={new Date().toTimeString().slice(0,5)}/> {/*current Time */}
                    </div> 
                     <div id="message" className="section-animation"> 
                       <label htmlFor="message-in">MESSAGE</label> 
                       <textarea id="message-in"></textarea>
                    </div >
                    <div id="booking-btn" className="section-animation">BOOK NOW</div>
                </form>
            </div>
        </div>
    </div>
    </>
)

}

export default Bookings;