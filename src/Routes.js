import React, { useState, useEffect } from 'react'
import { Route, Switch, Redirect} from "react-router-dom"
import ColorsList  from './ColorsList'
import Color from './Color'
import ColorForm from './ColorForm'
import useLocalStorage from './hooks'

function Routes() {
    const [localColors, setLocalColors] = useLocalStorage('color')
    

    const addColor = (colorObj) => {
        setLocalColors(oldColors => (
            [colorObj, ...oldColors]
        ));
    }

    return (
        <Switch>
            <Route exact path="/colors/new"><ColorForm addColor={addColor}/></Route>
            <Route exact path="/colors/:color"><Color colors={localColors}/></Route>
            <Route exact path="/colors"><ColorsList colors={localColors}/></Route>
            <Redirect to="/colors"></Redirect>
        </Switch>
    )
}

export default Routes;