import React from 'react'
import './SliderHeader.css'
import { useNavigate } from 'react-router-dom'

function SliderHeader({vizyonYazi}) {
  const film=useNavigate()
  return (
    <div className="vizyonSlider_header">
    <p className="vizyonText">{vizyonYazi}</p>
    <span className="vizyonAl" onClick={()=>film('/filmler')} >Tümü</span>
  </div>
  )
}

export default SliderHeader