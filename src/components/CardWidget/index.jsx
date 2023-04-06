import { useContext } from 'react';
import './CardWidget.css'
import  {cartContext}  from '../../context';

function CardWidget (){
   const {productsAdded}= useContext(cartContext);

   console.log("context",cartContext);
   console.log("prod added",productsAdded);
    
   return(
        <div className='Card-Widget'>
            <i  className="bi bi-cart nav-icon">  {productsAdded.length}</i>
          
        </div>
        )
           
}
export default CardWidget;



        