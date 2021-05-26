import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Album from './Album'
import Recommended from './Recommended'

const App = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/Recommended" component={Recommended} />
          <Route exact path="/Album" component={Album} />
          <React.Fragment>
            <h1>Hello, World!</h1>
            <Link to={`/Album`}>アルバム </Link>
         <br />
        <Link to={`/Recommended`}>おすすめ機能 </Link>
            {/* <Album /> */}
            {/* <Recommended /> */}
          </React.Fragment>
        </Switch>
      </BrowserRouter>
  )
}
export default App