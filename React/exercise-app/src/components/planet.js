// import { Fragment } from 'react'
import './planet.css'
const Planet = props => {
  return (
    <div onClick={() => props.clickOnPlanet}>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <p>
        <a href={props.links} target="_blank" rel="noopener noreferrer">
          Saiba mais
        </a>
      </p>
      <img src={props.planetImg} alt={props.name} className="planet-img"></img>
      <br />
    </div>
  )
}

export default Planet
