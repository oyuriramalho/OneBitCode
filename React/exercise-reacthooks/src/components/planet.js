import { Fragment, useState, useEffect } from 'react'
import './planet.css'
import SatelliteForm from '../shared/new-satellite-form.js'

async function getSatellites(X) {
  //X is the link for satellites's JSON data
  let response = await fetch(X)
  let data = await response.json()
  return data
}

function Planet(props) {
  const [satellitesList, setSatellites] = useState([])
  // [state, setStateMethod] = useState(inicialState)
  useEffect(() => {
    getSatellites(props.satellitesUrl).then(data => {
      setSatellites(data.satellites)
    })
  }, [])

  // Considering if we have an API response with satelite list
  let ListOfSatellites
  if (satellitesList.length != 0) {
    ListOfSatellites = (
      <Fragment>
        <h4>Satellites of {props.name}:</h4>
        <ul>
          {satellitesList.map((data, index) => (
            <li key={index}>{data.name}</li>
          ))}
        </ul>
      </Fragment>
    )
  } else {
    ListOfSatellites = <h4>No satellites</h4>
  }
  // Add new satellite on Planet method for new-satellite-form components
  const addSatellite = new_satellite => {
    if (satellitesList.length != 0) {
      setSatellites([...satellitesList, new_satellite])
    } else {
      setSatellites([new_satellite])
    }
  }

  return (
    <Fragment>
      <h2>Planeta {props.name}</h2>
      <p>{props.description}</p>
      <p>
        <a href={props.links} target="_blank" rel="noopener noreferrer">
          Saiba mais
        </a>
      </p>
      <img
        src={props.planetImg}
        alt={props.name}
        className={props.grey ? 'grey-img' : 'norm-img'}
        onClick={() => props.theClick()}
      ></img>
      <SatelliteForm addSatellite={addSatellite} />
      {ListOfSatellites}
      {console.log(`\n\nSatellite List of ${props.name}:`)}
      {console.log(satellitesList)}
      <br />
    </Fragment>
  )
}

export default Planet
