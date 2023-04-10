import { useContext, useState } from "react";
import { cartContext } from "../../context";
import { Container , Button, Form} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import  ItemCart  from "../ItemCart";
import { addDoc, getFirestore ,collection} from "firebase/firestore";


function Cart() {
    const {productsAdded,totalPrice,clear}=useContext(cartContext);

    //------------------------------------------------------------------
    const handleFormSubmit = () => {
        
        const nom= document.getElementById("nom").value;
        const tel= document.getElementById("tel").value;
        const dir= document.getElementById("dir").value;
        const email= document.getElementById("email").value;
        
        const order = {
            buyer:{
                name:nom,
                email:email,
                tel:tel,
                dir:dir,
            },
            items: productsAdded.map(product=>({id: product.id, name: product.name,precio:product.precio, cantidad:product.quantity})),
          total:totalPrice()
        };
    
        const db=getFirestore();
       const ordersCollection=collection(db,'orders');
       addDoc(ordersCollection,order )
       .then(({id})=>console.log(id))
clear();
      };

    //------------------------------------------------------------------



    if(productsAdded.length===0){
        return(
            <>
            <h2>NO HAS AÑADIDO PRODUCTOS AL CARRITO AUN </h2>
                <NavLink to={"/"}>
            <Button > EXPLORAR PRODUTOS
                    </Button>
                    </NavLink>
                    
            </>
        )
    }
    
    return(
    <>
    {productsAdded.map((products)=> <ItemCart key={products.id} ItemCart={products}/>)}
    <p>TOTAL A PAGAR: {totalPrice()}</p>


<form>
      {/* Agrega campos de entrada para los datos de la orden */}
      <label>
        Nombre:
        <input type="text" id="nom"  />
      </label>
      <label>
        Telefono:
        <input type="text" id="tel"  />
      </label>
      <label>
        Dirección:
        <input type="text" id="dir" />
      </label>
      <label>
        Email:
        <input type="text" id="email" />
      </label>
      
      {/* <button type="button" >Generar orden</button> */}
    </form>



    <NavLink to={"/Checkout"}>
            <Button onClick={handleFormSubmit}> REALIZAR COMPRA
                    </Button>
                    </NavLink>
               
    </>
    





)
    }
export default Cart


        



    

     