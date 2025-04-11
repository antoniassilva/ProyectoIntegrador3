import React, { Component } from 'react';
import FavoritaCard from '../../components/Favorita/FavoritaCard';

class Favorita extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      cargando: true
    };
  }

  componentDidMount() {
    const storage = localStorage.getItem('favorita');

    if (storage !== null) {
      const ids = JSON.parse(storage);
      const arrayPeliculas = [];

      ids.map(id => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2aa8547904e3b24a3d305a661689f936`)
          .then(response => response.json())
          .then(data => {
            arrayPeliculas.push(data);

            if (arrayPeliculas.length === ids.length) {
              this.setState({
                peliculas: arrayPeliculas,
                cargando: false
              });
            }
          })
          .catch(error => console.log('Error al buscar una peli favorita:', error));
      });
    } else {
      this.setState({ cargando: false });
    }
  }

  render() {
    return (
      <>
        <section className="titulo">
          <h2 className="tituSec">Favoritas</h2>
        </section>
        <section className="contenedor">
          {
            this.state.cargando ?
              <h1>Cargando...</h1>
              :
              this.state.peliculas.length === 0 ?
              <h2>No hay favoritas aún.</h2>
              :
              this.state.peliculas.map((peli, idx) => (
                <FavoritaCard data={peli} key={idx + peli.title} />
              ))
          }
        </section>
      </>
    );
  }
}

export default Favorita;
