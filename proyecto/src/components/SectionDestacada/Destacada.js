import React, {Component}from 'react'
import {Link} from 'react-router-dom'

class Destacada extends Component{
  constructor (props){
    super(props)
    this.state={
      data: props.data,
      mostrarContenido: false,
      favorito: false
    }

  }

  componentDidMount(){
    let storage= localStorage.getItem('favorita')
    if(storage !== null){
      let storageParseado = JSON.parse(storage)
      let estaMiId = storageParseado.includes(this.state.data.id)

      if(estaMiId){
        this.setState({favorito: true})
      }
    }
  }

  agregarFavorita(id){
    let storage = localStorage.getItem('favorita')
    if(storage !== null){
      let arrParseado = JSON.parse(storage)
      arrParseado.push(id)
      let arrStringificado = JSON.stringify(arrParseado)
      localStorage.setItem('favorita', arrStringificado)
    } else {
      let primerID = [id]
      let arrStringificado = JSON.stringify(primerID)
      localStorage.setItem('favorita', arrStringificado)
    }

    this.setState({
      favorito: true
    })
  }

  sacarFavorita(id){
    const storage = localStorage.getItem('favorita')
    const storageParseado = JSON.parse(storage)
    const filtrarStorage = storageParseado.filter((elm) => elm !== id )
    const storageStringificado = JSON.stringify(filtrarStorage)
    localStorage.setItem('favorita', storageStringificado)

    this.setState({
      favorito: false
    })
  }


  ocultar(){
    this.setState({
      mostrarContenido: !this.state.mostrarContenido
    })
  }

  render(){

    return(
      <article className="elementos letraPrincipal">
    <h3>{this.state.data.title}</h3>
    <img src={`https://image.tmdb.org/t/p/w342${this.state.data.poster_path}`} className="imagen"/>
    
    <Link className="enlace" to={`/detalle/${this.state.data.id}`}>
                    <p>detalle</p>
    </Link>

    {
      this.state.mostrarContenido=== true?
      <>
        <p>{this.state.data.overview}</p>
      </>
      :
      ''

    }

<button onClick= {()=> this.ocultar()}> Ver descripcion  </button>
{
          this.state.favorito ?
          <button onClick={()=> this.sacarFavorita(this.state.data.id) }>Quitar de Favoritos</button>
          :
          <button onClick={() => this.agregarFavorita(this.state.data.id)}>Agregar a Favoritos</button>
        }
    

  
    </article>

    )
  }
}


export default Destacada