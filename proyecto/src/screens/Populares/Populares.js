import react, {Component} from "react";
import PopularesCard from "../../components/Populares/PopularesCard";
import FiltroPopulares from "../../components/Populares/FiltroPopulares";
class Populares extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculas: [],
            backupPeliculas: [],
            page:1
        }
    }

    componentDidMount(){
        this.cargarPeliculas()
    }
    cargarPeliculas() {
        
    
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2aa8547904e3b24a3d305a661689f936&page=${this.state.page}`)
        .then((response) => response.json())
        .then((data) => {
            const peliculasActuales = this.state.peliculas;
            const peliculasNuevas = data.results;
            const listaNueva = peliculasActuales.concat(peliculasNuevas);
            this.setState({
                peliculas: listaNueva,
                backupPeliculas: listaNueva,
                page: this.state.page + 1
            });
        })
        .catch((error) => console.log(error));
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
            <FiltroPopulares filtro={(busqueda) => this.filtrarPeliculas(busqueda)} />
            
            <section class="titulo">
                <h2 class="tituSec">Populares</h2>
            </section>
            <section className="contenedor">
        
            {
                this.state.peliculas.length === 0 ?
                <h1>Cargando</h1>
                :
                this.state.peliculas.map((elm, idx) => <PopularesCard data={elm} key={idx + elm.title} /> )

            }

            <button onClick={()=> this.cargarPeliculas()}>Cargar mas</button>

            </section>
            </>
        )
    }
}

export default Populares