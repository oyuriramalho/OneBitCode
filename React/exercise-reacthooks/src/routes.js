import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlanetsScreen from './screens/planets-screen'

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<PlanetsScreen />} />
    </Routes>
  </BrowserRouter>
)

export default Rotas
