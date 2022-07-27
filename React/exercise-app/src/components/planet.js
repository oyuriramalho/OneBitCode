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
    if (
      this.state['satellites'].length === 0 &&
      this.props.satellitesUrl !== null
    ) {
      getSatellites(this.props.satellitesUrl).then(data => {
        this.setState({ satellites: data.satellites })
        // console.log(`${this.state.satellites.length} satélites no planeta ${this.props.name}`)
      })
    }
  }

  render() {
    let ListOfSatellites // instance variable out of if loop is EXTREMELY NECESSARY
    if (this.state.satellites.length > 0) {
      let SatelliteList = this.state.satellites.map((n,index) => <li key={index}>{n['name']}</li>)
      ListOfSatellites = (
        <Fragment>
          <h4>Satellites :</h4>
          <ul>{SatelliteList}</ul>
        </Fragment>
      )
      // console.log(`${this.state.satellites.length} satélites em ${this.props.name}`)
    } else {
      ListOfSatellites = null
      // console.log(`Zero satélites em ${this.props.name}`)
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
        {ListOfSatellites}
        <br />
      </div>
    )
  }
}

export default Planet
