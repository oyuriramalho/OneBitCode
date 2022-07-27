// import Planet from '../components/planet.js'
import React, { Fragment } from 'react'
import Planet from '../components/planet.js'

const clickOnPlanet = name => {
  alert(`Um clique no planeta ${name}`)
}

async function getPlanets() {
  let response = await fetch('http://localhost:3000/api/planet_list.json')
  let data = await response.json()
  return data
}

class PlanetList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      planets: []
    }
  }
  componentDidMount() {
    getPlanets().then(data => {
      this.setState({ planets: data['planets'] })
    })
  }

  render() {
    return (
      <Fragment>
        <h1>Planet List</h1>
        <hr />
        {this.state.planets.map((planet,index) => (
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
}

export default PlanetList
