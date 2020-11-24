
import React, { useState, useEffect } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'

function Color({ colors }){
    const color = useParams();
    const history = useHistory();
    const [currentColor, setCurrentColor] = useState(null)

    //if the color is not valid redirect to home page
    if(color){
        let res = colors.filter(color => color.name === color)
        if(res.length < 1){
            history.push("/colors")
        }
    }

    useEffect(() => {
        function updateColor(){
            let res = colors.filter(color => color.name === color)
            setCurrentColor(res[0])
        }
    updateColor();
    }, [color]);

    let colorPage = currentColor ? (<div style={{backgroundColor: currentColor.code}}>
                                        <p>THIS IS {currentColor.name}</p>
                                        <p>ISN'T IT BEAUTIFUL</p>
                                        <p><Link to="/colors">GO BACK</Link></p>
                                    </div>) : null

    return(
        <div className="Color-container">
            {colorPage}
        </div>
    )
}

export default Color;