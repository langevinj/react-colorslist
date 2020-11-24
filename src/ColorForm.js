import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

function ColorForm(addColor){
    const history = useHistory();
    const [colorObj, setColorObj] = useState({
        name: "",
        code: ""
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target
        setColorObj(colorObj => ({
            ...colorObj,
            [name]: value
        }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        addColor(colorObj);
        history.push("/colors");
    }

    return(
        <div className="ColorForm-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Color name:</label>
                <input type="text" name="name" id="name" value={colorObj.name} onChange={handleChange} placeholder="Enter a name for the color"></input>
                <label htmlFor="code">Color value:</label>
                <input name="code" id="code" value={colorObj.code} onChange={handleChange} type="color"></input>
                <br></br>
                <button>Add this color</button>
            </form>
        </div>
    )
}

export default ColorForm;