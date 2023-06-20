

export default function Card(props){
    return(
        <div className="card">
            <h2 className="percent">{props.percent}</h2>
            <img width={100} src={props.pic}/>
            <h3>{props.name} </h3>
        </div>
    )
}