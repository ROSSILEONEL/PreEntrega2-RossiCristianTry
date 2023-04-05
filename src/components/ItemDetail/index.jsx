import ItemCount from "../ItemCount/ItemCount";


function ItemDetail({itemF}) {
    console.log("ITEM  DETAIL RECIBE ",);
 return(
    <div>

<h1>ESTE ES ITEM DETAIL DE {itemF.name} </h1>
<h2></h2>
<ItemCount/>
    </div>
 )
}
export default ItemDetail