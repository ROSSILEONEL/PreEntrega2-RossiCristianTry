import { createContext , useState } from "react";


export const  cartContext= createContext();
export  function CustomProvider({children}){
    // lo que pasemos por el value del proveedor , es lo que los componentes van a poder acceder o leer
    // se pueden poner todo tipo de variables.
    
    const [productsAdded,setProductsAdded]=useState([]);
function onAdd(products,quantity) {
    
setProductsAdded((prevState)=> prevState.concat(products));

};

    return <cartContext.Provider value={{productsAdded, onAdd }}>
        {children}
        </cartContext.Provider>
         ;

}