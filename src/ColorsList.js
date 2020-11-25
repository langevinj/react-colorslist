import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ColorsList.css'


function ColorsList({colors}){
    return (
        <div className="container">
            <div className="ColorsList-header">
                <h3>Welcome to the color factory!</h3>
                <h2><Link to="/colors/new">Add a color</Link></h2>
            </div>
            <br></br>
            <div className="ColorsList">
                <p>Please select a color.</p>
                {colors === [] ? null : (<ul>{colors.map(color => <li key={color.name} data-testid="color-link"><Link to={`/colors/${color.name}`} className="color-link">{color.name}</Link></li>)}</ul>)}
            </div>
        </div>
    )
}

export default ColorsList;