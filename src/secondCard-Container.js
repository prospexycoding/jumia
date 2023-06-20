import "./card.css"
import { Secondarray } from "./secondArray"
import Secondcard from "./secondcard"

export default function Secondcardcontainer(){

    const done = Secondarray.map((mmm)=>{

        return(
            <Secondcard
                 photo={mmm.imagee}
                 productname={mmm.productName}
                 realprice={mmm.realPrice}
                 fakeprice={mmm.fakePrice}
                 percent2={mmm.percent2}
             
            />
        )

    })
    return(
        <section className="second-card-container">
            <h1 className="top">Top Selling Items</h1>
            <div className="second-card-box">
                {done}
            </div>
        </section>
    )
}