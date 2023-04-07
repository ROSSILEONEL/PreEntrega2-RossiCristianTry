import { useContext } from 'react';
import './CardWidget.css'
import  {cartContext}  from '../../context';

function CardWidget (){
   const {productsAdded}= useContext(cartContext);

   console.log("context",cartContext);
   console.log("prod added",{productsAdded});
    
   return(
        <div className='Card-Widget'>
            
            {/* <NavLink to={"/cart"}> */}
                
            <i  className="bi bi-cart nav-icon">  {productsAdded.length}</i>
                {/* </NavLink> */}
          
        </div>
        )
           
}
export default CardWidget;



        