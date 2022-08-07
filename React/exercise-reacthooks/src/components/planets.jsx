import React, { Fragment, useState, useEffect } from 'react'
import Planet from './planet.jsx'
import PlanetForm from '../shared/new-planet-form.jsx'

async function getPlanets() {
  let response = await fetch('http://localhost:3000/api/planet_list.json')
  let data = await response.json()
  return data
}

const clickOnPlanet = name => {
  alert(`Um clique no planeta ${name}`)
}

const Planets = () => {
  // Inicializando estado
  const [planets, setPlanets] = useState([
    {
      name: 'Earth',
      url_img:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/220px-The_Blue_Marble_%28remastered%29.jpg',
      description:
        "Earth is the third planet from the Sun and the only astronomical object known to harbor life. While large volumes of water can be found throughout the Solar System, only Earth sustains liquid surface water. About 71% of Earth's surface is made up of the ocean, dwarfing Earth's polar ice, lakes, and rivers. The remaining 29% of Earth's surface is land, consisting of continents and islands. Earth's surface layer is formed of several slowly moving tectonic plates, interacting to produce mountain ranges, volcanoes, and earthquakes. Earth's liquid outer core generates the magnetic field that shapes Earth's magnetosphere, deflecting destructive solar winds.",
      links: 'https://en.wikipedia.org/wiki/Earth',
      satellitesUrl: null
    }
  ])

  // const removeLast = () => {
  //   let new_planets = [...planets]
  //   new_planets.pop()
  //   setPlanets(new_planets)
  // }

  // const duplicateLast = () => {
  //   let lastPlanet = planets[planets.length - 1]
  //   setPlanets([...planets, lastPlanet])
  // }

  useEffect(() => {
    getPlanets().then(data => {
      setPlanets(data.planets)
    })
  },[])
  //setPlanets(setPlanets('http://localhost:3000/api/planet_list.json'),[])

  const addPlanet = (newPlanet) =>{
    setPlanets([...planets,newPlanet])
  }

  return (
    <Fragment>
      <h1>Planet List</h1>
      <PlanetForm addPlanet={addPlanet}/>
      {/* <button onClick={duplicateLast}>Duplicate last</button>
      <button onClick={removeLast}>Delete last</button>
      <br/> */}
      
      <hr />
      {planets.map((planet, index) => (
        <Planet
          name={planet.name}
          description={planet.description}
          planetImg={planet.url_img}
          links={planet.links}
          theClick={() => clickOnPlanet(planet.name)}
          grey={false}
          satellitesUrl={planet.satellitesUrl}
          key={index}
        />
      ))}
    </Fragment>
  )
}

export default Planets
