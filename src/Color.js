
import React, { useState, useEffect } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'
import './Color.css'

function Color({colors}){
    const param = useParams();
    const history = useHistory();
    const [currentColor, setCurrentColor] = useState(null)

    //if the color is not valid redirect to home page
    if(param.color){
        let res = colors.filter(color => color.name === param.color)
        if(res.length < 1){
            history.push("/colors")
        }
    }

    useEffect(() => {
        function updateColor(){
            let res = colors.filter(color => color.name === param.color)
            setCurrentColor(res[0])
        }
    updateColor();
    }, [param]);

    let colorPage = currentColor ? (<div data-testid="Color-container" className="color-container" style={{backgroundColor: currentColor.code}}>
                                        <p>THIS IS {currentColor.name}</p>
                                        <p>ISN'T IT BEAUTIFUL</p>
                                        <p><Link to="/colors" className="back-link">GO BACK</Link></p>
                                    </div>) : null

    return(
        <div className="Color-container">
            {colorPage}
        </div>
    )
}

export default Color;