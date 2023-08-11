import {useState, useEffect} from "react"
import {api} from "../../services/api"
import { UsersProps } from "./interfaces"
import { PageUsersMain } from "./styled"
import { useApp } from "../../hooks/useApp"
import { Header } from "../../components/Header"

function Users() {
  const [ users, setUsers ] = useState<UsersProps[]>([])
  const [ loading, setLoading ] = useState(false)
  const { logout } = useApp()

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      const response = await api.get("/users")
      setUsers(response.data)
      setLoading(false)
    }
    load()
  }, [])
  if(loading) {
    return (
      <p>Carregando...</p>
    )
  }

  return (
    <>
    <Header />
    <PageUsersMain>
      {
        users.length > 0 ? users.map(({name, id, email}) => {
          return (
            <div key={id}>
            <p>Id: {id}</p>
            <p>Nome: {name}</p>
            <p>Email: {email}</p>
          </div>
      )
        })
        :
        <p>Não tem usuários cadastrados</p>
      }
      <button onClick={logout}>Logout</button>
    </PageUsersMain>
    </>
  )
}

export { Users }