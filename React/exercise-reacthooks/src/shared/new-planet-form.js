import React, { Fragment, useState } from 'react'

const PlanetForm = props => {
  // Clear planet
  const inicialPlanet = {
    name: '',
    url_img: '',
    description: '',
    links: '',
    satellitesUrl: null
  }

  // Input's controller State
  const [newPlanet, setPlanet] = useState(inicialPlanet)

  // generic handler to deal with inputs
  const handleChange = e => {
    setPlanet({
      ...newPlanet,
      [e.target.name]: e.target.value
    })
  }

  //
  const handleSubmit = e => {
    e.preventDefault()
    props.addPlanet(newPlanet)
    setPlanet(inicialPlanet)
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            onChange={handleChange}
            name="name"
            value={newPlanet.name}
          />
        </div>
        <div>
          <label htmlFor="url_img">URL of image : </label>
          <input
            type="text"
            onChange={handleChange}
            name="url_img"
            value={newPlanet.url_img}
          />
        </div>
        <div>
          <label htmlFor="description">Description : </label>
          <input
            type="text"
            onChange={handleChange}
            name="description"
            value={newPlanet.description}
          />
        </div>
        <div>
          <label htmlFor="links">Related link : </label>
          <input
            type="text"
            onChange={handleChange}
            name="links"
            value={newPlanet.links}
          />
        </div>
        <br />
        <input type="submit" />
      </form>
    </Fragment>
  )
}

export default PlanetForm
