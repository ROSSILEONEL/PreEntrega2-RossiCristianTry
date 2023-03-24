import './NavBar.css'
import {NavLink} from 'react-router-dom'
function NavBar(){
    return(
    <div className='div-navBar'>
    <ul className="lista">
        <span>LAZY SKATE</span>
                        
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/item/:id"}>Productos</NavLink></li>
            <li><NavLink to={"/category/buzo"}>Buzo</NavLink></li>
            <li><NavLink to={"/category/deck"}>deck</NavLink></li>
            
                    </ul>




          
    </div>  )
    
}
export default NavBar