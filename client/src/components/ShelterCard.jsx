const ShelterCard = ({ name, location, catCount }) => {
  return (
    <div className="shelter-card">
      <h2>{name}</h2>
      <p><b>Location</b>: {location}</p>
      <p><b>Number of Cats</b>: {catCount}</p>
    </div>
  )
}

export default ShelterCard