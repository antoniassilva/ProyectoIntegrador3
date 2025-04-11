import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FavoritaCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      favorito: true 
    };
  }

  sacarFavorita(id) {
    let storage = localStorage.getItem('favorita');
    let parseado = JSON.parse(storage);
    let filtrado = parseado.filter(elm => elm !== id);
    let stringificado = JSON.stringify(filtrado);
    localStorage.setItem('favorita', stringificado);

    this.setState({ favorito: false });
  }

  render() {
    

    return this.state.favorito ? (
      <article className="elementos letraPrincipal">
        <h3>{this.state.data.title}</h3>
        <img
          src={`https://image.tmdb.org/t/p/w342${this.state.data.poster_path}`}
          className="imagen"
        />

        <Link className="enlace" to={`/detalle/${this.state.data.id}`}>
          <p>Ver detalle</p>
        </Link>

        <button onClick={() => this.sacarFavorita(this.state.data.id)}>Quitar de Favoritos</button>
      </article>
    ) : null;
  }
}

export default FavoritaCard;