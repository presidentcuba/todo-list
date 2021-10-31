import React from 'react'
import { Switch, Route, Link, useRouteMatch} from "react-router-dom"
export default function NestedRouter() {

    const {path} = useRouteMatch();
    console.log(path)
    return (
        <div>
            <h1>Demo Nested Router</h1>
            <ul>
                <li>
                    <Link to={`${path}react`}>React</Link> 
                </li>
                <li>
                    <Link to={`${path}vue`}>Vue</Link>
                </li>
                <li>
                    <Link to={`${path}angular`}>Angular</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/topics/react"><h1>React</h1></Route>
                <Route path="/topics/vue"><h1>Vue</h1></Route>
                <Route path="/topics/angular"><h1>Angular</h1></Route>
            </Switch>
        </div>
    )
}
