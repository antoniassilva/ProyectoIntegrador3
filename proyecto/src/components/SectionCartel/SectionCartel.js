import React, {Component}from 'react'
import Cartel from "./Cartel"
import "./styless.css"

class SeccionCartel extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
           
        }
    }
  
    componentDidMount() {
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=2aa8547904e3b24a3d305a661689f936')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.results); 
            this.setState({
                peliculas: data.results,
            });
        })
        .catch((error) => console.log("Error al traer películas:", error));
    }
  
   
  
    render(){
        return(
            <>
             <section className="contenedor">
             {
                this.state.peliculas.length === 0 ?
                <h1>Cargando</h1>
                :
                this.state.peliculas.slice(2, 7).map((elm, idx) => <Cartel data={elm} key={idx + elm.title} /> )

            }
            </section>
           
            </>
        )
    }
  }
  
  export default SeccionCartel