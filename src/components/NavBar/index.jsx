import './NavBar.css'
import {NavLink} from 'react-router-dom'
import CardWidget from '../CardWidget'

function NavBar(){
    return(
    <div className='div-navBar'>
        <ul className="lista">
             <NavLink to={"/"}><span>LAZY SKATE</span></NavLink>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/category/buzo"}>Buzo</NavLink></li>
            <li><NavLink to={"/category/deck"}>deck</NavLink></li>
            <NavLink to={"/Card"}><CardWidget/></NavLink>
        </ul>
    </div>  
          )
               }

export default NavBar

        
                        
            
  
            



          
    