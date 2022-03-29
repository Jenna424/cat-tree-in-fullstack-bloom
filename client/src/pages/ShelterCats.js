import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CatCard from '../components/CatCard'

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
      <h2>Cats Found in Shelter</h2>
      <div className="cat-cards-container">
        {cats.map((cat) => (
          <CatCard key={cat._id} {...cat} />
        ))}
      </div>
    </div>
  )
}

export default ShelterCats
