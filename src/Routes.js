import React, { useState } from 'react'
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom"
import ColorsList  from './ColorsList'
import Color from './Color'
import ColorForm from './ColorForm'

function Routes({colors}) {
    const [allColors, setColors] = useState(colors)

    const addColor = (colorObj) => {
        setColors(oldColors => (
            [colorObj, ...oldColors]
        ));
    }

    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/colors/new"><ColorForm addColor={addColor}/></Route>
            <Route exact path="/colors/:color"><Color colors={allColors}/></Route>
            <Route exact path="/colors"><ColorsList colors={allColors}/></Route>
            <Redirect to="/colors"></Redirect>
        </Switch>
        </BrowserRouter>
    )
}

Routes.defaultProps = {
    colors: [
        { name: "red", code: "#fc0f03" },
        { name: "blue", code: "#5203fc" }
    ]
}

export default Routes;