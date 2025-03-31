import React from 'react';
import {Switch, Route } from 'react-router-dom'
import Home from "./screens/Home/Home";
import Favoritas from "./screens/Favoritas/Favoritas";
import NotFound from "./screens/NotFound/NotFound";
import Header from "./components/Header/Header"
import Populares from "./screens/Populares/Populares"
import Cartel from "./screens/Cartel/Cartel"
import Busqueda from "./screens/Busqueda/Busqueda"



function App() {
  return (
    <React.Fragment>
      <Header/>
      <Switch>
        <Route path={'/'} exact={true} component={Home} />
        <Route path={'/favoritas'} component={Favoritas} />
        <Route path={'/populares'} component={Populares} />
        <Route path={'/cartel'} component={Cartel} />
        <Route path={'/busqueda'} component={Busqueda} />
        

        <Route path={''} component={NotFound} />
      </Switch>

    </React.Fragment>
    
  );
}

export default App;

