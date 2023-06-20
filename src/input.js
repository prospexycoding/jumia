import "./inputsection.css"
import star from "./images/star.png"
import search from "./images/search.png"
import help from "./images/help.png"
import account from "./images/account.png"
import cart from "./images/cart.png"
import drop from "./images/down.png"
import up from "./images/up-arrow.png"

import { useState } from "react"

export default function InputSection(){

  const[down, setdown] = useState(false)


  function handledrop(){
    setdown((event)=>{
      return ! event
    })
  }





    return(
        <div className="input-section">
              <h1 className="big-jumia">JUMIA <span className="input-star"><img width={20} src={star}/></span></h1>

              <div className="input-container">
                    <img className="search" width={25} src={search}/>
                   <input className="input" type="text" placeholder="Search product, brands and categories"/>
                   <button className="search-btn">SEARCH</button>
              </div>

              <img className="drop-down" onClick={handledrop} width={30} src={down ? up: drop}/>

              <div className={down ? "drop" : "nodrop"}>
                <a><img width={30} src={account}/> Account <img width={30} src={drop}/></a>
                <a><img width={30} src={help}/> Help <img width={30} src={drop}/></a>
                <a><img width={30} src={cart}/> Cart</a>
              </div>

        </div>
    )
}