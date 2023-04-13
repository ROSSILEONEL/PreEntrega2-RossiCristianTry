import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom'
import CardWidget from '../CardWidget'

function NavBar(){
    return(
    // <div className='div-navBar'>
        <Navbar className='bg-dark  '>
        <ul className="color:black">
             <NavLink className={'navlink'} to={"/"}>LAZY SKATE</NavLink>
            <li className='color:black'><NavLink className={'navlink'} to={"/"}>Home</NavLink></li>
            <li><NavLink className={'navlink'} to={"/category/buzo"}>Buzo</NavLink></li>
            <li><NavLink className={'navlink'} to={"/category/deck"}>Deck</NavLink></li>
            <NavLink className={'navlink'} to={"/Card"}><CardWidget/></NavLink>
        </ul>
        </Navbar>
          )
               }

export default NavBar

        
                        
            
  
            



          
    