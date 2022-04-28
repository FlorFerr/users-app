import React from 'react'
import Card from '../Card/Card'

const UsersList = (props) => {

  return (
    <Card>
        <div>
            <p >{props.name} ({props.age} years old)</p>
        </div>
    </Card>
  )
}

export default UsersList