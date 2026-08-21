import React from "react";
import Res_Vid from './assets/resturent _video.mp4'

function Review(){

const reviews = [
  {
    id: 1,
    name: "Aarav Sharma",
    image: "https://i.pravatar.cc/150?img=12",
    rating: "★★★★★",
    comment: "Absolutely loved the food! Everything was fresh, flavorful, and beautifully presented."
  },
  {
    id: 2,
    name: "Priya Mehta",
    image: "https://i.pravatar.cc/150?img=47",
    rating: "★★★★★",
    comment: "The atmosphere was amazing and the staff were incredibly friendly. Definitely coming back!"
  },
  {
    id: 3,
    name: "Rohan Kapoor",
    image: "https://i.pravatar.cc/150?img=11",
    rating: "★★★★☆",
    comment: "Great food and a really nice ambience. The portions were generous and worth the price."
  },
  {
    id: 4,
    name: "Ananya Singh",
    image: "https://i.pravatar.cc/150?img=32",
    rating: "★★★★★",
    comment: "One of the best dining experiences I've had recently. The flavors were incredible."
  },
  {
    id: 5,
    name: "Kabir Malhotra",
    image: "https://i.pravatar.cc/150?img=13",
    rating: "★★★★☆",
    comment: "Really tasty food with excellent presentation. Service was quick and professional."
  },
  {
    id: 6,
    name: "Meera Joshi",
    image: "https://i.pravatar.cc/150?img=44",
    rating: "★★★★★",
    comment: "The perfect place for a relaxed dinner. Every dish we ordered was delicious."
  },
  {
    id: 7,
    name: "Arjun Verma",
    image: "https://i.pravatar.cc/150?img=68",
    rating: "★★★★★",
    comment: "Fantastic experience from start to finish. The food was packed with flavor!"
  },
  {
    id: 8,
    name: "Ishita Rao",
    image: "https://i.pravatar.cc/150?img=49",
    rating: "★★★★☆",
    comment: "Beautiful restaurant with great food. The desserts were especially impressive."
  },
  {
    id: 9,
    name: "Vikram Patel",
    image: "https://i.pravatar.cc/150?img=14",
    rating: "★★★★★",
    comment: "Everything was cooked perfectly and the service was excellent. Highly recommended."
  },
  {
    id: 10,
    name: "Nisha Kapoor",
    image: "https://i.pravatar.cc/150?img=45",
    rating: "★★★★★",
    comment: "Loved the vibe, the food, and the presentation. This is definitely going on my favorites list!"
  }
];

return (
    <div id="review-container">
        <h3>REVIEWS</h3>
        <p>See What Our Customers Thinks About Us.....</p>
        <video src={Res_Vid} playsInline loop autoPlay id="review-bd"/>
         <div id="crousal-container">
     {reviews.map((v,i)=><div className="crousal-cards" key={i}>
                           <img src={v.image} alt={v.name}/>
                           <h4>{v.name}</h4>
                           <p>{v.comment}</p>
                           <p>{v.rating}</p>
                        </div>)}
         </div>
    </div>
)

}

export default Review;