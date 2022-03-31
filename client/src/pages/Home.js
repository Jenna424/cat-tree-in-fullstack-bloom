import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ShelterCard from '../components/ShelterCard'

const Home = () => {
  const [shelters, setShelters] = useState([])

  const fetchShelters = async () => {
    const response = await axios.get('/shelters')
    setShelters(response.data.shelters)
  }

  useEffect(() => {
    fetchShelters()
  }, [])

  return (
    <div>
      <h1>Cat Sanctuaries</h1>
      <div className="shelters-wrapper">
        {shelters.map((shelter) => (
          <Link to={`/shelters/${shelter._id}/cats`} key={shelter._id}>
            <ShelterCard {...shelter} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
