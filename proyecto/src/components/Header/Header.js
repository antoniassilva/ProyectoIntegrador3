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
             <div class="logo">🎬 Netflix</div>
            <nav><OpcionesMenu data={opciones} /></nav>
            <form action="/busqueda" method="GET" class="search-form">
            <input type="text" placeholder="Buscar..."></input>
            
            </form>
        </header>
        
        
        
    
    )
}

export default Header

