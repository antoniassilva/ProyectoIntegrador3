import React from "react";
import OpcionesMenu from "./OpcionesMenu";
import './styless.css'

function Header() {
    let opciones = [
        {
            name:'Home',
            path: '/'
        },
        {
            name:'Favoritas',
            path: '/favoritas'
        },
        {
            name:'Populares',
            path: '/populares'
        },
        {
            name:'Cartel',
            path: '/cartel'
        },
        
    ]
    return (
        <header>
             <div className="logo">🎬 Zineo</div>
            <nav><OpcionesMenu data={opciones} /></nav>
        </header>
        
        
        
    
    )
}

export default Header

