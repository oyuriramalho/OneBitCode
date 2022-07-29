import {Fragment, useState} from 'react'

async function getSatellites(X) {
  //X is the link for satellites's JSON data
  let response = await fetch(X)
  let data = await response.json()
  return data
}
