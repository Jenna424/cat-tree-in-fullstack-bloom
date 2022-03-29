import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CatCard from '../components/CatCard'

const ShelterCats = () => {
  let { id } = useParams()
  const [newCat, setNewCat] = useState({
    name: '',
    breed: '',
    color: '',
    temperament: '',
    image: '',
    shelter: id
  })
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

  const deleteCat = async (id) => {
    await axios
      .delete(`http://localhost:3001/cats/${id}`)
      .then(function (response) {
        getCatsByShelterId()
      })
  }

  return (
    <div>
      <h2>Cats Found in Shelter</h2>
      <div className="cat-cards-container">
        {cats.map((cat) => (
          <CatCard key={cat._id} {...cat} deleteCat={deleteCat} />
        ))}
      </div>
    </div>
  )
}

export default ShelterCats
