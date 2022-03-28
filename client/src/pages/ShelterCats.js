import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ShelterCats = () => {
  let { id } = useParams()
  const [cats, setCats] = useState([])

  const getCatsByShelterId = async () => {
    const response = await axios.get(
      `http://localhost:3001/shelters/${id}/cats`
    )
    setCats(response.data)
  }

  useEffect(() => {
    getCatsByShelterId()
  }, [])

  return (
    <div>
      <h3>Cats Found in Shelter</h3>
    </div>
  )
}

export default ShelterCats
