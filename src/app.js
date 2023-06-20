import Header from "./header"
import Main from "./main"
import "./app.css"
import Footer from "./footer"

export default function App(){
       return(
        <div className="app-container">
            <Header/>
            <Main/>
            <Footer/>
        </div>

       )
}