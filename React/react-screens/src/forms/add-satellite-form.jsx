function AddSatelliteForm (props){
  let newSatellite
  const handleSubmit =() => {
    props.addSatellite(newSatellite)
  }

  return (
  <form onsubmit={handleSubmit}>
    <label htmlFor="addSatellite">Novo satélite : </label>
    <input type="text" name="addSatellite" value={newSatellite}/>
    <input type="submit" />

  </form>)
}

export default AddSatelliteForm