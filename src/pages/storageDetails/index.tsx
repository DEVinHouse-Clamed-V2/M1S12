import {useState, useEffect} from "react"
import {api} from "../../services/api"
import { PageUsersMain } from "./styled"
import { Map } from "../../components/Map"
import { useParams } from "react-router-dom"
import { StorageProps } from "../storage/interfaces"

function StorageDetails() {
  const { id } = useParams()
  const [ storage, setStorage ] = useState<StorageProps>()
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const load = async () => {
      setLoading(true)
      const response = await api.get(`/storages/${id}`)
      setStorage(response.data)
      setLoading(false)
    }
    load()
  }, [id])
  if(loading || !storage) {
    return (
      <p>Carregando...</p>
    )
  }

  return (
    <>
      <PageUsersMain>
        <p>Id: {storage.id}</p>
        <p>Nome do depósito: {storage.name}</p>
        <p>Latitude: {storage.lat}</p>
        <p>Longitude: {storage.lon}</p>
      </PageUsersMain>
      <Map position={[storage.lat, storage.lon]} address={storage.address}/>
    </>
  )
}

export { StorageDetails }