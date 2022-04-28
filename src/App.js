import { useState } from 'react'
import UsersContainer from './Components/UsersContainer/UsersContainer'
import UsersInput from './Components/UsersInput/UsersInput'

const initialUsers = [
  {name: 'Flor', age: 27, id: 1},
  {name: 'Flor', age: 28, id: 2},
  {name: 'Flor', age: 29, id: 3}
]


function App() {

  const [users, setUsers] = useState(initialUsers)

  const saveHandler = (usersData) => {
    setUsers( [usersData, ...users]) 
  

  }
  console.log(users)
 
  return (
    <div className="App">
      <UsersInput onSave={saveHandler}/>
      <UsersContainer data={users}/>
    
    </div>
  );
}

export default App;
