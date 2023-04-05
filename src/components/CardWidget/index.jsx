import { useContext } from 'react';
import './CardWidget.css'
import  {Context}  from '../../context/index';

function CardWidget (){
   const {producstAdded}= useContext(Context);

   console.log("context",Context);
   console.log("prod added",producstAdded);
    
   return(
        <div className='Card-Widget'>
            <i  className="bi bi-cart nav-icon"></i>
            {producstAdded}
        </div>
        )
           
}
export default CardWidget;



        