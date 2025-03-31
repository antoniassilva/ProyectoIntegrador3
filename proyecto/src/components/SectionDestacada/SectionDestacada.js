import React from "react";
import Destacada from "./Destacada"
import "./styless.css"

function SeccionDestacada(){
    const fichasDestacada=[  
        {
            id:1,
            title: 'Computadora',
            detalle: 'Detalle',
            text: 'Computadora Mac book pro',
            fav: 'Favoritos',
            
        },
        {
            id:2,
            title: 'Celular',
            detalle: 'Detalle',
            text: 'Iphone 15',
            fav: 'Favoritos',
            
        },
        {
            id:3,
            title: 'Audiculares',
            detalle: 'Detalle',
            text: 'Audiculares bluetooth Sony',
            fav: 'Favoritos',
            
        },


    ]
    return (
        <section className="contenedor destacada">
        {fichasDestacada.map((elm) => (
            <Destacada key={elm.id} data={elm} />
        ))}
    </section>

    )
}

export default SeccionDestacada