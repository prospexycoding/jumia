import FirstHeader from "./header1"
import SecondHeader from "./header2"
import "./header.css"

export default function Header(){

    return(
        <div className="header-main">
            <FirstHeader/>
            <SecondHeader/>
        </div>
    )

}