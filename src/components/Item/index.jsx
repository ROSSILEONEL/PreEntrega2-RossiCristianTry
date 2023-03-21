function Item({arrP}) {
    // (first) => { second }
return(
    <div>
        <h1>{arrP.name}</h1>
    <p> {arrP.descripcion}</p>
    <p> {arrP.medida}</p>
<h2>{arrP.precio}</h2>
    </div>
)
}
export default Item