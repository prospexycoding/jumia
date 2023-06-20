import InputSection from "./input"
import Markets from "./markets"
import CardContainer from "./Card-container"
import Secondcardcontainer from "./secondCard-Container"

export default function Main(){
    return(
        <main>
            <InputSection/>
            <Markets/>
            <CardContainer/>
            <Secondcardcontainer/>
        </main>
    )
}