import React from "react";
import Cartel from "./Cartel"
import "./styless.css"

function SectionCartel(){
    const fichasCartel = [
        {
            id:1,
            title: 'Vestido',
            text: 'Vestido de mujer rosa',
            detalle: 'Detalle',
            fav: 'Favoritos',
            
        },
        {
            id:2,
            title: 'Sweter',
            text: 'Sweter de mujer crema',
            detalle: 'Detalle',
            fav: 'Favoritos',
            
        },
        {
            id:3,
            title: 'Chaqueta',
            text: 'Chaqueta azul de hombre',
            detalle: 'Detalle',
            fav: 'Favoritos',
            
        },
    ]
    return (
        <section className="contenedor electronica">
            {
                fichasCartel.map((elm, idx) => <Cartel key={`${idx}-${elm.id}`} data={elm} /> )
            }
        </section>
    )
}
export default SectionCartel