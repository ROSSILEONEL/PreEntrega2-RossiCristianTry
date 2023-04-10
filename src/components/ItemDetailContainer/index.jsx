

import { useParams } from "react-router-dom";
import products from "../../Mocks/products";
import ItemDetail from "../ItemDetail/index"
import { useState , useEffect} from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer(){
   const [itemFind,setItemFind]=useState('');
   const param=useParams();
  //  const [carga,setCarga]=useState(false);

   useEffect(() => {
    const querydb=getFirestore();
    const queryDoc=doc(querydb,'products',param.id);

    getDoc(queryDoc).then(result=>setItemFind({id: result.id,...result.data()}))
  
  
    }, [param.id])

    









 
   
 
 
     
     

 
 return (
   
 <ItemDetail itemF={itemFind} />



     )
    }
    export default ItemDetailContainer;
     