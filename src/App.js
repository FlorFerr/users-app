import { useState } from 'react'
import UsersContainer from './Components/UsersContainer/UsersContainer'
import UsersInput from './Components/UsersInput/UsersInput'
import './App.css'

function App() {

  const [users, setUsers] = useState([])

  const saveHandler = (usersData) => {
    setUsers( [usersData, ...users]) 
  }
  
  return (
    <div className="App">
      <UsersInput onSave={saveHandler}/>
      <UsersContainer data={users}/>
    </div>
  );
}

export default App;
