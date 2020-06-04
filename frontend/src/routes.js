import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Perfil from './pages/Perfil'
import NovaProposta from './pages/NovaProposta'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/propostas/nova" component={NovaProposta} />
      </Switch>
    </BrowserRouter>
  )
}
