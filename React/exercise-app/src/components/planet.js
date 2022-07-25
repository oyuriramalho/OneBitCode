// import { Fragment } from 'react'
import './planet.css'
import React, { Fragment } from 'react'

async function getSatellites(X) {
  //X is the link for satellites's JSON data
  let response = await fetch(X)
  let data = await response.json()
  return data
}

class Planet extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      satellites: []
    }
  }

  componentDidMount() {
    if (this.props.satellitesUrl !== null) {
      getSatellites(this.props.satellitesUrl).then(data => {
        this.setState({ satellites: data.satellites })
      })
      let satelliteList = this.state.satellites.map(n =>(
        <li>{n.name}</li>
      ))
    }
  }

  render() {
    let satellites

    if (this.state.satellites.length > 0) {
      satellites = (
        <Fragment>
          <h4>Satellites :</h4>
          <ul>{this.satelliteList}</ul>
        </Fragment>
      )
    } else {
      satellites = null
    }

    return (
      <div onClick={this.props.theClick}>
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
        <p>
          <a href={this.props.links} target="_blank" rel="noopener noreferrer">
            Saiba mais
          </a>
        </p>
        <img
          src={this.props.planetImg}
          alt={this.props.name}
          className={this.props.grey ? 'grey-img' : 'norm-img'}
        ></img>
        <br />
      </div>
    )
  }
}

export default Planet
