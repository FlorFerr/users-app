import React from 'react'
import Card from '../Card/Card'
import UsersList from './UsersList'

const UsersContainer = ({data}) => {

  return (
    <Card>
      {
        data.map(u => <UsersList name={u.name} age={u.age} key={u.id}/>)
      }
    </Card>
  )
}

export default UsersContainer