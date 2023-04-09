import { useContext } from 'react';
import './CardWidget.css'
import  {cartContext}  from '../../context';

function CardWidget (){
   const {productsAdded,totalProducts}= useContext(cartContext);

    
   return(
        <div className='Card-Widget'>
            
            {/* <NavLink to={"/cart"}> */}
                
            <i  className="bi bi-cart nav-icon">  {totalProducts()||''}</i>
                {/* </NavLink> */}
          
        </div>
        )
           
}
export default CardWidget;



        