import React, { useState } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import ColorsList  from './ColorsList'
import Color from './Color'
import ColorForm from './ColorForm'

function Routes() {
    const [colors, setColors] = ([])

    const addColor = (colorObj) => {
        setColors(oldColors => (
            [colorObj, ...oldColors]
        ));
    }

    return (
        <Switch>
            <Route exact path="/colors/new"><ColorForm addColor={addColor}/></Route>
            <Route exact path="/colors/:color"><Color colors={colors}/></Route>
            <Route exact path="/colors"><ColorsList /></Route>
            <Redirect to="/colors"></Redirect>
        </Switch>
    )
}

// Routes.defaultProps = {
//     colors: [
//         { name: "red", code: "#fc0f03" },
//         { name: "blue", code: "#5203fc" }
//     ]
// }

export default Routes;