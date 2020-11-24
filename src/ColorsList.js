import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ColorForm from './ColorForm'

function ColorsList({colors}){
    return (
        <div className="container">
            <div className="ColorsList-header">
                <h3>Welcome to the color factory!</h3>
                <h2><Link to="/colors/new">Add a color</Link></h2>
            </div>
            <div className="ColorsList">
                <p>Please select a color.</p>
                {colors === [] ? null : (<ul>{colors.map(color => <li key={color.name}><Link to={`/colors/${color.name}`}>{color.name}</Link></li>)}</ul>)}
            </div>
        </div>
    )
}

export default ColorsList;