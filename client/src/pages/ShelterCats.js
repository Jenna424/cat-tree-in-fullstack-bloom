import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import CreateCatForm from '../components/CreateCatForm'
import CatCard from '../components/CatCard'

const ShelterCats = () => {
  let { id } = useParams()
  const [isFormHidden, setIsFormHidden] = useState(true)
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

  const handleInputChange = (event) => {
    setNewCat({
      ...newCat,
      [event.target.name]: event.target.value
    })
  }

  const createCat = async (event) => {
    event.preventDefault()
    await axios
      .post('http://localhost:3001/cats', newCat)
      .then(function (response) {
        getCatsByShelterId()
      })
      .catch(function (error) {
        console.log(error)
      })
    setNewCat({
      name: '',
      breed: '',
      color: '',
      temperament: '',
      image: '',
      shelter: id
    })
  }

  const toggleIsFormHidden = () => {
    setIsFormHidden((prevState) => !prevState)
  }

  const updateCat = async (id) => {
    await axios
      .put(`http://localhost:3001/cats/${id}`, { name: 'Anonymous' })
      .then(function (response) {
        getCatsByShelterId()
      })
  }

  return (
    <div className="shelter-cats-page">
      <button
        className="shelter-admission-form-btn"
        onClick={toggleIsFormHidden}
      >
        {isFormHidden ? 'Show Admission Form' : 'Hide Admission Form'}
      </button>
      {!isFormHidden && (
        <CreateCatForm
          newCat={newCat}
          handleInputChange={handleInputChange}
          createCat={createCat}
        />
      )}
      <h2>Cats Found in Shelter</h2>
      <div className="cat-cards-container">
        {cats.map((cat) => (
          <CatCard
            key={cat._id}
            {...cat}
            updateCat={updateCat}
            deleteCat={deleteCat}
          />
        ))}
      </div>
    </div>
  )
}

export default ShelterCats
