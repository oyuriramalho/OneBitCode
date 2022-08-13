import { Fragment} from 'react'

function Planet(props) {
  let satellites
  if (props.showSatellites) {
    if (props.satelliteList.length === 0) {
      satellites = <h4>No satellites</h4>
    } else if (props.satelliteList.length > 0) {
      satellites = (
        <Fragment>
          <h3>{`Satellites of ${props.name}:\n`}</h3>
          <ul>
            {props.satelliteList.map((moon, index) => (
              <li key={index}>{moon}</li>
            ))}
          </ul>
        </Fragment>
      )
    }
  } else {
    satellites = null
  }

  return (
    <Fragment>
      <h2>Planeta {props.name}</h2>
      <p>{props.description}</p>
      <img src={props.planetImg} alt={`Imagem do planeta ${props.name}`} />
      {satellites}
      <br/>
    </Fragment>
  )
}

export default Planet