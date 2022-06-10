import './App.css'
import RandomUser from './componets/RandomUser'
import useUser from './hooks/useUser'


function App() {

  const {user, newUser} = useUser()

  return (
    <div className="App">
      <RandomUser user={user} newUser={newUser} />
    </div>
  )
}

export default App
