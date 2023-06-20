import "./markets.css"


import health from "./images/health&beauty.png"
import supermarket from "./images/supermarket.png"
import home from "./images/home.png"
import appliance from "./images/appliance.png"
import phones from "./images/phones&tabet.png"
import computer from "./images/computer.png"
import electronics from "./images/electronics.png"
import fashion from "./images/fashion.png"
import baby from "./images/baby.png"
import gaming from "./images/game.png"
import sporting from "./images/sports.png"
import other from "./images/other.png"
import bigimg1 from "./images/big img1.png"
import bigimg2 from "./images/big img 2.png"
import bigimg3 from "./images/big img3.png"
import ban1 from "./images/ban 1.jpg"
import ban2 from "./images/ban 2.png"
import ban3 from "./images/ban 3.png"
import ban4 from "./images/ban 4.jpg"
import ban5 from "./images/ban 5.png"
import arrow from "./images/arrow.png"

import { useRef } from "react"

export default function Markets(){

    const imggs = [ ban1,ban2,ban3,ban4,ban5]
    const changeimg = useRef(null)

    let counter = 0

    setInterval(()=>{
        counter = counter + 1

        if(counter === imggs.length){
            counter = 0
        }

        changeimg.current.src= imggs[counter]



    } ,5000)






    return(
        <section className="Market-section">
            <div className="market-box">
                <a> <img src={health}/> Supermarket</a>
                <a> <img src={supermarket}/> Health and Beauty</a>
                <a> <img src={home}/> Home & Office</a>
                <a> <img src={appliance}/> Appliances</a>
                <a> <img src={phones}/> Phones & Tablets</a>
                <a> <img src={computer}/> Computing</a>
                <a> <img src={electronics}/> Electronics</a>
                <a> <img src={fashion}/> Fashion</a>
                <a> <img src={baby}/> Baby Products</a>
                <a> <img src={gaming}/> Gaming</a>
                <a> <img src={sporting}/> Sporting Goods</a>
                <a> <img src={other}/> Other Categories</a>
                
            </div>

            <div className="big-images">
                <img className="first-big-img" src={bigimg1} ref={changeimg}/>
                <div className="small-images">
                    <img className="small-img" src={bigimg2}/>
                    <img className="small-img" src={bigimg3}/>
                </div>
            </div>
        </section>
    )
}