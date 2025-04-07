import React from 'react'
import SectionDestacada from "../../components/SectionDestacada/SectionDestacada"
import SectionCartel from "../../components/SectionCartel/SectionCartel"

function Home() {
    return (
        <React.Fragment>
        <main>
            <section class="titulo">
                <h2 class="tituSec">Populares</h2> 
                <a href="/populares" >Ver todas</a>
            </section>

            <SectionDestacada/>
            <section class="titulo"><h2 class="tituSec">Cartel</h2>
            <a href="/cartel" >Ver todas</a>
            </section>
            <SectionCartel/>
            

        </main>
        </React.Fragment>
    )
}

export default Home;