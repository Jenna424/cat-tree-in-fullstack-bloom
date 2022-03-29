const CatCard = ({ _id, name, breed, color, temperament, image, updateCat, deleteCat }) => {
  return (
    <div className="cat-card">
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <p className="cat-details"><b>Breed</b>: {breed}</p>
      <p className="cat-details"><b>Color</b>: {color}</p>
      <p className="cat-details"><b>Temperament</b>: {temperament}</p>
      <button className="update-cat-btn" disabled={name === 'Anonymous'} onClick={() => updateCat(_id)}>Remove Name</button>
      <button className="delete-cat-btn" onClick={() => deleteCat(_id)}>Remove from Shelter</button>
    </div>
  )
}

export default CatCard