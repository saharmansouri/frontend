import React, { useState } from 'react'
import Modal from 'react-bootstrap'
export default function NewCourse() {
    const [newCourse,setNewCourse]=useState('')
    const [isSHowModal,setIsSHowModal]=useState(false)

  return (
    <div className='container-fluid' id='home-content'>

        <button >افزودن دوره جدید</button>
    </div>
  )
}
