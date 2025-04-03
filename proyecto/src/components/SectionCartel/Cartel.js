import React from 'react'
import {Link} from 'react-router-dom'

function Cartel(props) {
  return (
    <article class="elementos letraPrincipal">
    <h3>{props.data.title}</h3>
    <p>{props.data.text}</p>

    <Link className="enlace" to={`/detalle/${props.data.id}`}>
                    <p>{props.data.detalle}</p>
    </Link>

    <Link className="enlace" to={`/favoritas`}>
    <p>{props.data.fav}</p>
    </Link>
    </article>

    
  )
}

export default Cartel