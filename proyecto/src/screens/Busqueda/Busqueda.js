import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Busqueda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultados: [],
      cargando: true,
    };
  }

  componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query');

    if (query) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=2aa8547904e3b24a3d305a661689f936&query=${query}`)
        .then((res) => res.json())
        .then((data) =>
          this.setState({
            resultados: data.results,
            cargando: false,
          })
        )
        .catch((err) => console.log(err));
    }
  }

  render() {
    return (
      <React.Fragment>
      <section class="titulo"> <h2 class="tituSec">Resultados de búsqueda</h2></section>
      <section className="contenedor">
        {this.state.cargando ? (
          <p>Cargando...</p>
        ) : this.state.resultados.length === 0 ? (
          <p>No se encontraron resultados.</p>
        ) : (
          this.state.resultados.map((pelicula) => (
            <article className="elementos letraPrincipal">
              <h3>{pelicula.title}</h3>
            <img className="imagen" src={`https://image.tmdb.org/t/p/w342${pelicula.poster_path}`}/>
            <Link className="enlace" to={`/detalle/${pelicula.id}`}> <p>detalle</p> </Link>
            </article>

          ))
        )}
      </section>
      </React.Fragment>
    );
  }
}

export default Busqueda;