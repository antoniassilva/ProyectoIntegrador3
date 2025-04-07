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
    {
      this.state.mostrarContenido=== true?
      <>
        <p>{this.state.data.text}</p>
      </>
      :
      ''

    }

    <Link className="enlace" to={`/detalle/${this.state.data.id}`}>
                    <p>{this.state.data.detalle}</p>
    </Link>

    <Link className="enlace" to={`/favoritas`}>
    <p>{this.state.data.fav}</p>
    </Link>

    <button onClick= {()=> this.ocultar()}> Ver descripcion  </button>
    
    </article>

    )
  }
}


export default Destacada