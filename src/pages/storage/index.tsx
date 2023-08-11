import {useState, useEffect} from "react"
import {api} from "../../services/api"
import { StorageProps } from "./interfaces"
import { PageStorageMain } from "./styled"
import { Link } from "react-router-dom";

function Storage() {
  const [ storages, setStorages ] = useState<StorageProps[]>([])
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      const response = await api.get("/storages")
      setStorages(response.data)
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
    <PageStorageMain>
      {
        storages.length > 0 ? storages.map(({name, id, lat, lon}) => {
          return (
            <div key={id}>
            <p>Id: {id}</p>
            <p>Nome do depósito: {name}</p>
            <p>Latitude: {lat}</p>
            <p>Longitude: {lon}</p>
            <Link to={`/storage/${id}`}>Mais detalhes sobre o depósito</Link>
          </div>
      )
        })
        :
        <p>Não tem depósitos cadastrados</p>
      }
    </PageStorageMain>

    </>
  )
}

export { Storage }