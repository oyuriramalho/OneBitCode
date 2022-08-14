import React from 'react'

function AddPlanetForm (props) { 
  return(
    <form>
      <label htmlFor="planetName">Name: </label>
      <input type="text" name="planetName"/><br/>
      <label htmlFor="description">Description: </label>
      <input type="text" name="description"/><br/>
      <label htmlFor="url_img">Image's URL: </label>
      <input type="text" name="url_img"/>
      <br/>
      <input type="submit"/>
    </form>

  )}

  export default AddPlanetForm