import React, { useState } from "react";

/*BG Video Import */
import Kitchen from './assets/kitchen.mp4';

/*Appetizers Import */
import C6 from './assets/c6.webp'
import Ccbc from './assets/ccbc.webp'
import Pt from './assets/pt.webp'
import Tp from './assets/tp.webp'
import Vs from './assets/vs.webp'

/*Desserts Import*/
import Gj from './assets/gj.webp'
import Cb_De from './assets/cb_de.webp'
import R from './assets/r.webp'
import Mc_De from './assets/mc_de.webp'
import Clc from './assets/clc.webp'

/*Drinks Import*/
import Ml from './assets/ml.webp'
import Fls from './assets/fls.webp'
import Cc from './assets/cc.webp'
import Wm from './assets/wm.webp'
import Mc_Dr from './assets/mc_dr.webp'

/*Main Course Import */
import Bc_Mc from './assets/bc_mc.webp'
import Pbm from './assets/pbm.webp'
import Cb_Mc from './assets/cb_mc.webp'
import Dm from './assets/dm.webp'
import Vhn from './assets/vhn.webp'



function Store(){

const menu = [
  {
    category: "Drinks",
    items: [
      {
        name: "Mango Lassi",
        price: 149,
        ingredients: ["Mango", "Yogurt", "Sugar", "Milk", "Cardamom"],
        picture: Ml
      },
      {
        name: "Fresh Lime Soda",
        price: 99,
        ingredients: ["Lime", "Soda Water", "Sugar", "Salt", "Mint"],
        picture: Fls
      },
      {
        name: "Cold Coffee",
        price: 159,
        ingredients: ["Coffee", "Milk", "Sugar", "Ice Cream", "Ice"],
        picture: Cc
      },
      {
        name: "Watermelon Mojito",
        price: 179,
        ingredients: ["Watermelon", "Lime", "Mint", "Sugar", "Soda Water"],
        picture: Wm
      },
      {
        name: "Masala Chai",
        price: 79,
        ingredients: ["Black Tea", "Milk", "Sugar", "Ginger", "Cardamom", "Cinnamon"],
        picture: Mc_Dr
      }
    ]
  },
  
   {
    category: "Appetizers",
    items: [
      {
        name: "Paneer Tikka",
        price: 249,
        ingredients: ["Paneer", "Capsicum", "Onion", "Yogurt", "Ginger", "Garlic", "Tikka Spices"],
        picture: Pt
      },
      {
        name: "Chicken 65",
        price: 279,
        ingredients: ["Chicken", "Corn Flour", "Yogurt", "Curry Leaves", "Chili", "Ginger", "Garlic"],
        picture: C6
      },
      {
        name: "Vegetable Samosa",
        price: 99,
        ingredients: ["Potato", "Peas", "Onion", "Flour", "Cumin", "Chili", "Indian Spices"],
        picture: Vs
      },
      {
        name: "Crispy Chilli Baby Corn",
        price: 219,
        ingredients: ["Baby Corn", "Capsicum", "Onion", "Corn Flour", "Soy Sauce", "Chili Sauce", "Garlic"],
        picture: Ccbc
      },
      {
        name: "Tandoori Prawns",
        price: 399,
        ingredients: ["Prawns", "Yogurt", "Lemon", "Ginger", "Garlic", "Tandoori Spices", "Butter"],
        picture: Tp
      }
    ]
  },

  {
    category: "Main Courses",
    items: [
      {
        name: "Butter Chicken",
        price: 349,
        ingredients: ["Chicken", "Butter", "Tomato", "Cream", "Ginger", "Garlic", "Indian Spices"],
        picture: Bc_Mc
      },
      {
        name: "Paneer Butter Masala",
        price: 299,
        ingredients: ["Paneer", "Tomato", "Butter", "Cream", "Onion", "Cashew", "Indian Spices"],
        picture: Pbm
      },
      {
        name: "Chicken Biryani",
        price: 329,
        ingredients: ["Basmati Rice", "Chicken", "Onion", "Yogurt", "Saffron", "Mint", "Biryani Spices"],
        picture: Cb_Mc
      },
      {
        name: "Dal Makhani",
        price: 249,
        ingredients: ["Black Lentils", "Kidney Beans", "Butter", "Cream", "Tomato", "Ginger", "Garlic"],
        picture: Dm
      },
      {
        name: "Veg Hakka Noodles",
        price: 229,
        ingredients: ["Noodles", "Cabbage", "Carrot", "Capsicum", "Spring Onion", "Soy Sauce", "Garlic"],
        picture: Vhn
      }
    ]
  },

  {
    category: "Desserts",
    items: [
      {
        name: "Gulab Jamun",
        price: 119,
        ingredients: ["Milk Powder", "Flour", "Sugar", "Cardamom", "Rose Water"],
        picture: Gj
      },
      {
        name: "Chocolate Brownie",
        price: 179,
        ingredients: ["Dark Chocolate", "Flour", "Butter", "Sugar", "Eggs", "Cocoa Powder"],
        picture: Cb_De
      },
      {
        name: "Rasmalai",
        price: 149,
        ingredients: ["Chenna", "Milk", "Sugar", "Saffron", "Cardamom", "Pistachios"],
        picture: R
      },
      {
        name: "Chocolate Lava Cake",
        price: 199,
        ingredients: ["Dark Chocolate", "Flour", "Butter", "Sugar", "Eggs", "Cocoa Powder"],
        picture: Clc
      },
      {
        name: "Mango Cheesecake",
        price: 229,
        ingredients: ["Mango", "Cream Cheese", "Digestive Biscuits", "Butter", "Sugar", "Cream"],
        picture: Mc_De
      }
    ]
  }
];

let [activeId,setActiveId]=useState(menu[0].category)
let [visible,setVisible]=useState(true);

function handleClick(id){
if(id===activeId) return;
  setVisible(false)
setTimeout(()=>{
  setActiveId(id)
  setVisible(true)},100)
}


let activeTab=menu.find(tab=>tab.category===activeId)

return (
    <>
    <h2 id="menu-heading">MENU</h2>
    <div id="store-container">
      <div id="menu-head">
       {menu.map((v,i)=><div className="tab-btns" onClick={()=>handleClick(v.category)} key={i} id={activeId===v.category?"active-tab":""}>{v.category}</div>)}
       </div>
       <video src={Kitchen} loop playsInline autoPlay id="menu-bg"/>
       <div id="menu-body">
       {activeId && (activeTab.items.map((item,i)=><div className="dish-cards" key={i} id={visible?"show-tab":""}>
                           <div className="image-container">
                             <img src={item.picture} alt={item.name}/>
                           </div>
                           <h4>{item.name}</h4>
                           <h6>₹ {item.price}</h6>
                           <p>{item.ingredients.join(", ")}</p>
                        </div>))}
       </div>  
    </div>
    </>
)

}


export default Store;