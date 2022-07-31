import { Fragment, useState, useEffect } from 'react'
import './planet.css'

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

  let ListOfSatellites
  if (props.satellitesUrl !== null && satellitesList.length != 0) {
    ListOfSatellites = (
      <Fragment>
        <h4>Satellites of {props.name}:</h4>
        <ul>
          {satellitesList.map(data => (
            <li>{data.name}</li>
          ))}
        </ul>
      </Fragment>
    )
  } else {
    ListOfSatellites = null
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
      {ListOfSatellites}
      <br />
    </Fragment>
  )
}

export default Planet
