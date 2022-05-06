
import troll from '../images/troll.png'



export default function Navbar() {
    return (
        <nav className="nav-bar">  
            <img src={troll} alt="Logo" className="nav--logo" />  
            <h3 className="nav--logo_text">MemeGenerator</h3>
            <h4 className="nav--title">React Course - Project 3</h4>
        </nav>
    )
}