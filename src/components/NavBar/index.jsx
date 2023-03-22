import './NavBar.css'
import {NavLink} from 'react-router-dom'
function NavBar({pruebaUse}){
    return(
    <div className='div-navBar'>
    <ul className="lista">
        <span>{pruebaUse}</span>
            {/* <li><NavLink to={"/"}><img src={img} alt="Logo Vivero" className="logo"/></NavLink></li>             */}
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/item"}>Productos</NavLink></li>
            <li><NavLink to={""}>Galeria</NavLink></li>
            
                    </ul>




            {/* 
            
            ---------------viejo nav-----------------------------
            <nav>
                <span>{pruebaUse}</span>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Galeria</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Contactanos</a></li>
                </ul>
            </nav>   */}
    </div>  )
    
}
export default NavBar