import React, { useState } from 'react';
import Card from '../Card/Card'
import Button from './Button'
import Modal from '../Modals/Modal'
import './UsersInput.css';


const UsersInput = (props) => {
    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')
    const [error, setError] = useState()

    const userNameHandler = (e) => {
        setUserName(e.target.value)
    }

    const userAgeHandler = (e) => {
        setUserAge(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        if(userName.trim().length === 0 || (userAge.trim().length === 0 || +userAge < 1)){
            setError({
                title: 'Valor inválido',
                message: 'Ingrese un valor válido'
            })
            return
        }

        const usersData = {
            name: userName,
            age: userAge,
            id: Math.random()
        }

        props.onSave(usersData)
      

        setUserName('')
        setUserAge('')
    }

    const errorHandler = () => {
        setError(null)
    }

  return (
      <div className='card'>
          {error && <Modal onClose={errorHandler} title={error.title} message={error.message}/>}

          <Card>
        <form action="" className='input' onSubmit={submitHandler}>
            <div>
                <div>
                    <label htmlFor="">UserName</label>
                    <input type="text" value={userName} onChange={userNameHandler}/>
                </div>
                <div>
                    <label htmlFor="">Age</label>
                    <input type="number" value={userAge} onChange={userAgeHandler}/>
                </div>
            </div>
            <div>
                <Button value={'Add user'}/>
            </div>
        </form>
        
    </Card>
      </div>
   
  )
}

export default UsersInput