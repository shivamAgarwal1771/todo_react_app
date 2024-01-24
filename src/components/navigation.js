import React from 'react'
import Login from './login'
import Home from './Home'
import Chat from './chat'
import {Routes, Route} from 'react-router-dom'
import App from './App'
function Navigation() {
  return<Routes>
    <Route path="/" element={<Login/>} />
    <Route path="/todo" element={<App/>} />
    <Route path="/icon" element={<Home/>} />
    <Route path="/chat" element={<Chat/>} />
</Routes>

}

export default Navigation;