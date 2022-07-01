import { Fragment } from 'react'

const Planet = props => {
  return(
  <Fragment>
    <h2>{props.name}</h2>
    <p>{props.description}</p>
    <a href={props.links}>Saiba mais</a>
    <br/>
  </Fragment>
)
}

export default Planet
