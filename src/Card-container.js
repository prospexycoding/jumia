import "./card.css"
import Card from "./card"
import { Array } from "./array"



export default function CardContainer(){


    const finished = Array.map((vvv)=>{

        return(
              <Card pic={vvv.img_path}
                    name={vvv.name}
                    percent={vvv.percent}/>
        )

    })




    return(
        <div className="card-container">
            <div className="card-box">
                
             {finished}
            </div>
        </div>
    )
}