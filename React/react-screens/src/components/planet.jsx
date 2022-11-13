import { Fragment,useState, useEffect} from 'react'
import AddSatelliteForm from '../forms/add-satellite-form'

function Planet(props) {
  const [satellitesList, setSatellites] = useState(props.satelliteList)

  const addSatellite = (newSatellite) =>{
    setSatellites([...satellitesList, newSatellite])
  }

  useEffect(() => {
      setSatellites(props.satelliteList)
    }
  , [])

  let satellites
  // Estou no componente Planet ?
  if (props.showSatellites) {
    // Se lista vazia
    if (satellitesList.length === 0) {
      satellites = <h4>No satellites</h4>
      // Se há satélites listados
    } else if (satellitesList.length > 0) {
      satellites = (
        <Fragment>
          <AddSatelliteForm addSatellite={addSatellite}/>
          <h3>{`Satellites of ${props.name}:\n`}</h3>
          <ul>
            {satellitesList.map((moon, index) => (
              <li key={index}>{moon}</li>
            ))}
          </ul>
        </Fragment>
      )
    }
  } else {
    // Se estou no componente Planets
    satellites = null
  }

  return (
    <Fragment>
      <h2>Planeta {props.name}</h2>
      <p>{props.description}</p>
      <img src={props.planetImg} alt={`Imagem do planeta ${props.name}`} />
      {satellites}
      <br />
    </Fragment>
  )
}

export default Planet
