import React from 'react'
import Login from './login'
import Home from './Home'
import Chat from './chat'
import {Routes, Route,BrowserRouter} from 'react-router-dom'
import App from './App'
function Navigation() {
  return<Routes>
    <Route exact path="/todo_react_app" element={<Login/>} />
    <Route path="/todo" element={<App/>} />
    <Route path="/icon" element={<Home/>} />
    <Route path="/chat" element={<Chat/>} />
</Routes>

}

export default Navigation;