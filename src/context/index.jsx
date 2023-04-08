import { createContext , useState } from "react";


export const  cartContext= createContext();
export  function CustomProvider({children}){
    const [productsAdded,setProductsAdded]=useState([]);
    
    function onAdd(products,quantity) {
        const isAlreadyAdded=isInCart(products);

        if(isAlreadyAdded){
            const productToModify=productsAdded.find((productAdded)=>productAdded.id===products.id);
            const productModified={...productToModify,quantity:productToModify.quantity+quantity};
            setProductsAdded((prevState)=>prevState.map(productsAdded.id===products.id?productModified:productsAdded));
        }  
        else{
            setProductsAdded((prevState)=>prevState.concat({...products,quantity}));
        } 
        
        function isInCart(products) {
            return productsAdded.some((productAdded)=> productAdded.id===products.id)
        }
    };
    
    
    
    
    
    
    
    
    const totalProducts=()=>productsAdded.reduce((acumulador,prodActual)=>acumulador+prodActual.quantity,0)
    const totalPrice=()=>{
        productsAdded.reduce((prev,actual)=>prev+actual.quantity*actual.price,0)
    }
    function clear() {    
        
        setProductsAdded([])
        return (alert("ESTAS SEGURO QUE QUIERES VACIAR EL CARRITO?"))
    }
    function removeItem(products) {
        
        const updatedCartItems = productsAdded.filter((productAdded) => productAdded.id !== itemId);
            setProductsAdded(updatedCartItems);
            return(alert("el producto fue eliminado")            )  
        };
        
        
         
        
        
        
        
    return <cartContext.Provider value={{productsAdded, onAdd ,clear,removeItem,totalProducts,totalPrice}}>
        {children}
        </cartContext.Provider>
         ;

}