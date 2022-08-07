import React, { Fragment, useState } from 'react'

const SatelliteForm = props => {
  const [newSatelliteName, setSatelliteName] = useState('')
  const handleChange = e => setSatelliteName(e.target.value)
  // e.currentTarget.value also works ... e = event
  const handleSubmit = e => {
    e.preventDefault()

    props.addSatellite({ name: newSatelliteName })
    setSatelliteName('')
  }

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <label htmlFor="satelliteName">New Satellite : </label>
        <input
          type="text"
          name="satelliteName"
          placeholder="New satellite name"
          value={newSatelliteName}
          onChange={handleChange}
        />
        <input type="submit" />
      </form>
    </Fragment>
  )
}

export default SatelliteForm
