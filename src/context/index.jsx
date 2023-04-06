import { createContext , useState } from "react";


export const  cartContext= createContext();
export  function CustomProvider({children}){
    // lo que pasemos por el value del proveedor , es lo que los componentes van a poder acceder o leer
    // se pueden poner todo tipo de variables.
    
    const [productsAdded,setProductsAdded]=useState([]);
function onAdd(products,quantity) {
    
setProductsAdded(productsAdded.concat(products*quantity));
console.log(`ESTE CONSOLE ESTA EN CONTEXT Y LA QUANTITY ES DE : ${quantity}`);
console.log(`ESTE CONSOLE ESTA EN CONTEXT Y LOS PRODUSCTOS AGREGADOS SON : ${productsAdded}`);

};

    return <cartContext.Provider value={{productsAdded, onAdd }}>
        {children}
        </cartContext.Provider>
         ;

}