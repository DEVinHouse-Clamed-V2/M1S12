import {useState, useEffect} from "react"
import {api} from "../../services/api"

function Users() {
  const [users, setUsers] = useState()

  useEffect(() => {
    const load = async () => {
      const response = await api.get("/users")
    }
    load()
  }, [])
  return (
    <p>
      Usuario
    </p>
  )
}

export { Users }