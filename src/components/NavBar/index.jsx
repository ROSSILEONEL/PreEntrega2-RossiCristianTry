import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar';

import {NavLink} from 'react-router-dom'
import CardWidget from '../CardWidget'

function NavBar(){
    return(
    // <div className='div-navBar'>
        <Navbar bg='dark' variant='dark'>
        <ul className="">
             <NavLink to={"/"}><span>LAZY SKATE</span></NavLink>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/category/buzo"}>Buzo</NavLink></li>
            <li><NavLink to={"/category/deck"}>deck</NavLink></li>
            <NavLink to={"/Card"}><CardWidget/></NavLink>
        </ul>
        </Navbar>
          )
               }

export default NavBar

        
                        
            
  
            



          
    