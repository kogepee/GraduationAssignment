import React from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import Album from './Album'
import Recommended from './Recommended'
import './Reset.css'
import './App.css'

const App = () => {
    return (
    <div>
    <header>５５期卒業サイト</header>
      <BrowserRouter>
        <Switch>
          <Route exact path="/Recommended" component={Recommended} />
          <Route exact path="/Album" component={Album} />
          <React.Fragment>
            <h1>Hello, World!</h1>
            <div className="transition">
              <Link to={`/Album`}>アルバム </Link>
              <br />
              <Link to={`/Recommended`}>おすすめ機能 </Link>
            </div>
          </React.Fragment>
        </Switch>
      </BrowserRouter>
      <footer><small>2021.6.6 卒業</small></footer>
  </div>
  )
}
export default App