import React from 'react'
import SectionDestacada from "../../components/SectionDestacada/SectionDestacada"
import SectionCartel from "../../components/SectionCartel/SectionCartel"
import FiltroHome from "../../components/Busqueda/FiltroHome"

function Home() {
    return (
        <React.Fragment>
            <FiltroHome/>
        <main>
            <section className="titulo">
                <h2 className="tituSec">Populares</h2> 
                <a href="/populares" >Ver todas</a>
            </section>

            <SectionDestacada/>
            <section className="titulo"><h2 className="tituSec">Cartel</h2>
            <a href="/cartel" >Ver todas</a>
            </section>
            <SectionCartel/>
            

        </main>
        </React.Fragment>
    )
}

export default Home;