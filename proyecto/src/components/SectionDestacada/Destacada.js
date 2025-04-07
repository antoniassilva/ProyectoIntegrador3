import React, {Component}from 'react'
import {Link} from 'react-router-dom'

class Destacada extends Component{
  constructor (props){
    super(props)
    this.state={
      data: props.data,
      mostrarContenido: false
    }

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
    {
      this.state.mostrarContenido=== true?
      <>
        <p>{this.state.data.overview}</p>
      </>
      :
      ''

    }

<button onClick= {()=> this.ocultar()}> Ver descripcion  </button>

    <Link className="enlace" to={`/detalle/${this.state.data.id}`}>
                    <p>detalle</p>
    </Link>

  
    </article>

    )
  }
}


export default Destacada