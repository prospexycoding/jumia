import star from "./images/star.png"
import pay from "./images/pay.png"
import food from "./images/food.png"
import party from "./images/party.png"
import logistics from "./images/logistics.png"
import menu from "./images/menu.png"
import multiply from "./images/mulitply.png"

import { useState } from "react"

export default function SecondHeader(){

    const[slide, noslide] = useState(false)

    function handleshow(){
        noslide((event)=>{
            return ! event
        })
    }


    return(
        <div className="second-header">
            <img onClick={handleshow} className="menu" src={slide? multiply : menu} width={25}/>
            <div className="jumia">
                <span className="star"><img width={20} src={star}/></span>
                <h4>Sell on jumia</h4>
            </div>
            

            <h2 className="jumia2">JUMIA<span className="star"><img width={10} src={star}/></span></h2>

            <nav className={slide? "slide" : "noslide"}>
                <a><img width={20} src={pay}/> PAY</a>
                <a><img width={20} src={food}/> FOOD</a>
                <a><img width={20} src={party}/> PARTY</a>
                <a><img width={20} src={logistics}/> LOGISTICS</a>
            </nav>
        </div>
    )
}