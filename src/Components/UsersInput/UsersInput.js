import React, { useState } from 'react';
import Card from '../Card/Card'
import './UsersInput.css';

const UsersInput = (props) => {

    const [userName, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')

    const userNameHandler = (e) => {
        setUserName(e.target.value)
    }

    const userAgeHandler = (e) => {
        setUserAge(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()

        const usersData = {
            name: userName,
            age: userAge,
            id: Math.random()
        }

        props.onSave(usersData)
      

        setUserName('')
        setUserAge('')
    }

  return (
    <Card>
        <form action="" onSubmit={submitHandler}>
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
                <button type='submit'>Add user</button>
            </div>
        </form>
    </Card>
  )
}

export default UsersInput