import axios from "axios"
import { useEffect, useState } from "react"

const useUser = () => {
    const [user, setUser] = useState()
    const [changer, setChanger] = useState(user)
    
    let newUser = () => setChanger(user)
  
    useEffect(() => {
      axios.get('https://randomuser.me/api/')
        .then(res => setUser(res.data.results[0]))
        .catch(err => console.log(err))
    }, [changer])
    
    return {user, newUser}
}

export default useUser