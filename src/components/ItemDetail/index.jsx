import { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { cartContext } from "../../context";
import { useState } from "react";
// import { Container } from 'react-bootstrap';
import {Container, Card,CardImg,Button} from 'react-bootstrap';



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
<Card style={{ width: '19rem' }}>
      <Card.Img variant="top" src={itemF.imagen} />
      <Card.Body>
        <Card.Title>{itemF.name}</Card.Title>
        <Card.Text>
          {itemF.descripcion}
         
        </Card.Text>
        <Card.Text>
          <span>
Stock:             {itemF.stock}
          </span>
         
        </Card.Text>
        <Card.Text>
          
         PRECIO:  ${itemF.precio}
        </Card.Text>
        
<div className="div-count">
<ItemCount stock={itemF.stock} onAdd={onAddProduct}/>
</div>
      </Card.Body>
    </Card>
 
</div> 

    </Container>
 )
}
export default ItemDetail