import { Fragment, useState } from 'react'
import './planet.css'

async function getSatellites(X) {
  //X is the link for satellites's JSON data
  let response = await fetch(X)
  let data = await response.json()
  return data
}

function Planet(props) {
  // [state, setStateMethod] = useState(inicialState)
  const [satellitesList, setSatellites] = useState(null)
  let ListOfSatellites
  if (props.satellitesUrl != satellitesList) {
    ListOfSatellites = (
      <Fragment>
        <h4>Satellites of {props.name}:</h4>
        <ul>
          {getSatellites(props.satellitesUrl).map((n, index) => (
            <li key={index}>{n['name']}</li>
          ))}
        </ul>
      </Fragment>
    )
  } else {
    ListOfSatellites = null
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
    ></img>
    {ListOfSatellites}
    <br />
  </Fragment>
)
