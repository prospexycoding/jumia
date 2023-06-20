import img1 from "./images/img1.jpg"


export default function FirstHeader(){
    return(
        <div className="first-header">
            <div className="deliver">
                   <h1>Your Everyday Delivery  </h1> 
                   <span className="free">  For Free</span>
            </div>

            <img className="img1" src={img1}/>
            <h2 className="call">Call to order  <span className="phone">07061266382</span> </h2>

        </div>
    )
}