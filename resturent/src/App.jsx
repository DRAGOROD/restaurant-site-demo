import Hero from './hero.jsx'
import Navbar from './navbar.jsx';
import Store from './store.jsx'
import Bookings from './bookings.jsx';
import Review from './review.jsx';
import Footer from './footer.jsx';

import { useRef,useContext, createContext } from 'react';

export let navContext=createContext(null)

function App() {

let homeRef=useRef(null);
let storeRef=useRef(null);
let bookingRef=useRef(null);
let reviewRef=useRef(null);



  return (
    <>
    <navContext.Provider value={{homeRef,storeRef,bookingRef,reviewRef}}>
     <Navbar/>
     <div ref={homeRef}>
       <Hero/>
     </div>
     <div ref={storeRef}>
       <Store/>
     </div>
     <div ref={bookingRef}>
       <Bookings/>
     </div>
     <div ref={reviewRef}>
       <Review/>
     </div> 
    <Footer/>
    </navContext.Provider>
    </>
  );

}

export default App