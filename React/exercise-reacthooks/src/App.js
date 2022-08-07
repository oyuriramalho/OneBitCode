import React from 'react'
import AppRoutes from './routes'
//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
//import PlanetsScreen from './screens/planets-screen'

function App() {
  return (
    <div className="App">
      {/* <PlanetsScreen /> */}
      <AppRoutes/>
    </div>
  )
}

export default App
