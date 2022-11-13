import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlanetsScreen from './screens/planets-screen'
import PlanetScreen from './screens/planet-screen'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PlanetsScreen />} />
        <Route path="/:id" element={<PlanetScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
