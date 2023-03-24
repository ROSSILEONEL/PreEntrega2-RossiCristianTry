
function Item({arrP}) {
 
return(
    <div style={{border: "solid 2px black" ,margin:"20px" ,padding:"20px"}}>
        <img src="" alt="FOTO DEL PRODUCTO " />
        <h1>{arrP.name}</h1>
        <p> {arrP.categoria}</p>
        <p> {arrP.descripcion}</p>
        <p> {arrP.medida}</p>
        <h2>{arrP.precio}</h2>
    </div>
)
}
export default Item