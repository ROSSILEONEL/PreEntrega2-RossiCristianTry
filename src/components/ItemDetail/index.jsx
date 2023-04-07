import { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context";
import { useState } from "react";
// import { Container } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';



function ItemDetail({itemF}) {
   const {onAdd}=useContext(cartContext);
   const [added, setAdded]=useState(0);

 function onAddProduct(count){
            setAdded(count);
            onAdd(itemF,count)
 }
 
 
    return(
    <Container className="p-3">
<div className="div-information">
<h1>{itemF.name}</h1>
<p>{itemF.descripcion}</p>
<p>{itemF.medida}</p>
<p>Categoria: {itemF.categoria}  Material: {itemF.material} </p>
<p>Stock: {itemF.stock}</p>
<h3>   $ {itemF.precio}    </h3>
</div>


    

<div className="div-count">
<ItemCount stock={itemF.stock} onAdd={onAddProduct}/>
</div>
    </Container>
 )
}
export default ItemDetail