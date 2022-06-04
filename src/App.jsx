import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import RandomUser from './componets/RandomUser'


function App() {

  const [user, setUser] = useState()
  const [changer, setChanger] = useState(user)
  
  let newUser = () => setChanger(user)

  useEffect(() => {
    axios.get('https://randomuser.me/api/')
      .then(res => setUser(res.data.results[0]))
      .catch(err => console.log(err))
  }, [changer])


  return (
    <div className="App">
      <RandomUser user={user} newUser={newUser} />
    </div>
  )
}

export default App
