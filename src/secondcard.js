

export default function Secondcard(props){


    return(
        <div className="second-card">
            <h4 className="percent2">{props.percent2}</h4>
            <img width={100} src={props.photo}/>
            <h3 className="product-name">{props.productname}</h3>
            <h2 className="real-price">{props.realprice}</h2>
            <h1 className="fake-price">{props.fakeprice}</h1>
        </div>
    )
}