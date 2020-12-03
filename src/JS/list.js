import React from 'react'
import {useFetch} from "./useFetch"

const url = './concursantes.json'
const List = () => {
  const {loading, items} = useFetch(url) //!!! tiene que tener nombre que empieza con "use"
  //   console.log(items)  
  let colorFondo =""
  loading ? colorFondo = "white" : colorFondo = "lightgray"
  return (
    <div>
      <h2 style={{backgroundColor: colorFondo, color: "#282c34", marginBottom:0, paddingBottom:20, paddingTop:20}}>Concursantes</h2>
      <div className="flex" key={items.id}>
        {items.map((item)=>{
          const{id,concursante,etiquetado}= item
          //console.log(id)
          return(
            <React.Fragment key={id}>
              <hr/>
              <p style={{margin:10, color:"black"}}>{concursante}</p>
              <p style={{margin:10, color:"#808080",fontSize:"70%",alignSelf:"center"}}>{etiquetado}</p>
            </React.Fragment>
          )
        })}
      </div>  
      <h2>{loading ? 'loading...' : '🌸'}</h2>
      <h2 style={{color:"#444444"}}>@sakuranbo.shodo</h2>
    </div>


  )
}
export default List