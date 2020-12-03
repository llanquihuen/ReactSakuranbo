import React from 'react'
import {useFetch} from "./useFetch"
import {useState} from 'react'
import logo from "../imagen.png"

const url = './concursantes.json'
const Items = () => {
const {loading, items} = useFetch(url) //!!! tiene que tener nombre que empieza con "use"
//   console.log(items)  
  const  nume = Math.floor(Math.random()* items.length)
//   console.log(nume)

const [uno, setUno] = useState("🤞")
// const [dos, setDos] = useState("🤞")
const [end, setEnd] = useState(false)
// const [foto, setFoto] = useState("")

let ganador = ""
// let elEtiquetado ="" 
const setStates =()=>{
    setEnd(false)
 for (let i = 0; i < 20; i++) {
    ((i)=> {
    setTimeout(()=> {
      let numef=(Math.floor(Math.random()* items.length));
      setUno(items[numef].concursante)
      // setDos(items[numef].etiquetado)
    //   console.log(ganador2)
    }, i * 100);
  })(i);
}
    
    setTimeout(() => {
        
        if (!loading){
            ganador = items[nume].concursante
            // elEtiquetado = items[nume].etiquetado
        }
        setUno(ganador)
        // setDos(elEtiquetado)
        setEnd(true)
        // const laFoto = async ()=>{
        //     const jsonF = (`https://api.instagram.com/${ganador}/?__a=1`)
        //     console.log(jsonF)
        //     const jsonFoto = await fetch(jsonF)
        //     console.log(jsonFoto);
        //     const elJson = await jsonFoto.json()
        //     console.log(elJson.graphql.user.profile_pic_url_hd)
        //     console.log(elJson)
            
    
        // }
        //         (async () => {
        //             console.log(laFoto())
        //             setFoto( laFoto())
        //         })()
    }, 2040);


}

    
let altura=""
let margen=""
let normBold=""
let tamanio=""
end? altura ="300px" :altura="400px"
end? margen ="10px" :margen="60px"
end? normBold="bold" : normBold="normal"
end? tamanio=50 : tamanio=30




  return (<div  key={items.id} style={{height:"100vh"}}>
        {/* {console.log(items,nume, items[nume])} */}
        <img className="logoSakura" style={{maxHeight:altura,marginTop:margen}} src={logo} alt="Logo Sakuranbo"/>
            <h2 style={{marginTop:0, textTransform:"uppercase"}}>{end ? "" : 'Concurso 1.000 Seguidores'}</h2>
            
            {/* <p>Ganador: {ganador}</p> */}
            {/* <p>Ganador: {uno} </p> */}
            <div className="flex1"><a style={{alignSelf:"center", fontWeight:normBold,fontSize:tamanio}} href={`https://www.instagram.com/${uno}`}>Ganador: {uno}</a>
            {/* <img style={{marginLeft:30, maxHeight:100}} src={foto} alt=""/> */}
            </div>

            <br/>
            {/* <p style={{marginTop:0, marginBottom:0}}>Persona Etiquetada: {dos}</p> */}
            <br/>
            <button style={{marginTop:0}} className="btn" onClick={setStates}>Elegir Ganador</button>
            <h2 >{end ? "¡Felicidades!" : ''}</h2>
            <h2 style={{margin:0}} className="omedeto">{end ? "🎊おめでとうございます🎊" : ''}</h2>
            <h2>@sakuranbo.shodo</h2>
            <h2>{loading ? 'loading...' : ''}</h2>

        </div>
    )
}

export default Items
