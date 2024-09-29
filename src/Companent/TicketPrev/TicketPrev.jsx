import React from 'react'
import './TicketPrev.css'

function TicketPrev({handlePrev}) {
  return (
    <div className='ticketPrev'>
      <p>Aşağıda listelenen film, salon ve seans seçeneklerinden tercihini yaparak diğer adımlara geçebilirsin.</p>
      <button onClick={handlePrev}>Devam Et</button>
    </div>
  )
}

export default TicketPrev
