import React from 'react'
import Button from '../UsersInput/Button'


import './Modal.css'

const Modal = (props) => {
  return (
        <div>
            <div className='backdrop'></div>
            <div className='modal'>
                <header className='header'>
                    <Button onClick={props.onClose} value={'x'}></Button>
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