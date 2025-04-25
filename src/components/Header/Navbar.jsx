// importazione file
import {NavLink} from "react-router-dom"


export default function Navbar() {
    return (
        <nav>
            <ul className="menu">
                <li><NavLink to="/" >Home</NavLink></li>
                <li><NavLink to="/posts" >Posts</NavLink></li>
                <li><NavLink to="/chi-siamo" >Chi siamo</NavLink></li>
            </ul>
        </nav>
    )
}