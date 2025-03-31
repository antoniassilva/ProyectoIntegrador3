import React from "react";
import { Link } from 'react-router-dom'

function OpcionesMenu(props) {
    return (
        <ul>
            {
                props.data.map((elm, idx) => 
                    <li key={`${elm.name}-${idx}`}>
                      <Link to={elm.path} className="link">
                            {elm.name}
                        </Link>   
                    </li>)
               
            }
        </ul>
    )
}

export default OpcionesMenu