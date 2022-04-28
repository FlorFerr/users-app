import React from 'react'


import './Modal.css'

const Modal = (props) => {
  return (
        <div>
            <div className='backdrop'></div>
            <div className='modal'>
                <header className='header'>
                    <button value={'x'} onClick={props.onClose}>x</button>
                    <h2>{props.title}</h2>
                </header>
                <div className='content'>
                    <p>{props.message}</p>
                </div>
            </div>
        </div>

  )
}

export default Modal