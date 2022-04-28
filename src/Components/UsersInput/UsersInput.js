import React from 'react';
import Card from '../Card/Card'
import './UsersInput.css';

const UsersInput = () => {
  return (
      <Card>
    <form action="">
        <div>
            <div>
                <label htmlFor="">UserName</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Age</label>
                <input type="text" />
            </div>
        </div>
        <div>
            <button></button>
        </div>
    </form>
    </Card>
  )
}

export default UsersInput