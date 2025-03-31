import React from 'react'
import SectionDestacada from "../../components/SectionDestacada/SectionDestacada"

function Home() {
    return (
        <React.Fragment>
        <main>
            <section class="titulo">
                <h2 class="tituSec">Populares</h2> 
                <a href="/populares" >Ver todas</a>
            </section>

            <SectionDestacada/>
            

        </main>
        </React.Fragment>
    )
}

export default Home;