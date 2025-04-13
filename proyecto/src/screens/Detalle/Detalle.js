import React, { Component } from 'react';
import "./styless.css"


class Detalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: null,
      favorito: false
    };
  }

 

  componentDidMount() {

    const idPelicula = this.props.match.params.id;
    console.log(idPelicula)

    fetch(`https://api.themoviedb.org/3/movie/${idPelicula}?api_key=2aa8547904e3b24a3d305a661689f936`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ pelicula: data });
      })
      .catch((error) => console.error("Error al traer detalle:", error));
    
      let storage= localStorage.getItem('favorita')
      if(storage !== null){
        let storageParseado = JSON.parse(storage)
        let estaMiId = storageParseado.includes(idPelicula)
  
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
  render() {

    return (
      
       <section className="detalle-container">
       {
        this.state.pelicula === null ? 
        <p>Cargando...</p> 
        : 
        <>
        <h2 className="detalle-title">{this.state.pelicula.title}</h2>
        <div className="detalle-content">
          <img
            src={`https://image.tmdb.org/t/p/w300${this.state.pelicula.poster_path}`}
            className="detalle-poster"
          />
          <div className="detalle-info">
            <p><strong>Resumen:</strong> {this.state.pelicula.overview}</p>
            <p><strong>Fecha de estreno:</strong> {this.state.pelicula.release_date}</p>
            <p><strong>Rating:</strong> {this.state.pelicula.vote_average}</p>
            <p><strong>Duracion:</strong> {this.state.pelicula.runtime} minutos</p>
            <p><strong>Género:</strong></p>
            <ul>
              {this.state.pelicula.genres.map((genero) => (
                <li key={genero.id}>{genero.name}</li>
              ))}
            </ul>
           
          {
            this.state.favorito ?
            <button onClick={()=> this.sacarFavorita(this.state.pelicula.id) }>Quitar de Favoritos</button>
            :
            <button onClick={() => this.agregarFavorita(this.state.pelicula.id)}>Agregar a Favoritos</button>
          }

          </div>
        </div>
      </>
}
      </section> 
    )
  }
}

export default Detalle;

