import react, {Component} from "react";
import CartelCard from "../../components/Cartel/CartelCard";
import FiltroCartel from "../../components/Cartel/FiltroCartel";
class Cartel extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            backupPeliculas: []
        }
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=2aa8547904e3b24a3d305a661689f936')
        .then((response) => response.json())
        .then(( data ) => this.setState({
            peliculas:data.results, 
            backupPeliculas: data.results
        }))
        .catch((error) => console.log(error) )
    }

    filtrarPeliculas(busquedaUsuario){
        const peliculasFiltradas = this.state.backupPeliculas.filter(
            (elm) => elm.title.toLowerCase().includes(busquedaUsuario.toLowerCase())
        )
        this.setState({peliculas: peliculasFiltradas})
    }

    render(){
        return(
            <>
            <FiltroCartel filtro={(busqueda) => this.filtrarPeliculas(busqueda)} />
            
            <section class="titulo">
                <h2 class="tituSec">Cartel</h2>
            </section>
            <section className="contenedor">
        
            {
                this.state.peliculas.length === 0 ?
                <h1>Cargando</h1>
                :
                this.state.peliculas.map((elm, idx) => <CartelCard data={elm} key={idx + elm.title} /> )

            }
            </section>
            </>
        )
    }
}

export default Cartel