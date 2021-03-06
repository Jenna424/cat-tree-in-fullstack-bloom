const CreateCatForm = ({ newCat, handleInputChange, createCat }) => {
  return (
    <div className="form-container">
      <h2>Add Cat to Shelter</h2>
      <form onSubmit={createCat}>
        <div className="form-field">
          <label><b>Name</b>:</label>
          <input name="name" type="text" onChange={handleInputChange} placeholder="Enter name..." value={newCat.name} required />
        </div>
        <div className="form-field">
          <label><b>Breed</b>:</label>
          <input name="breed" type="text" onChange={handleInputChange} placeholder="Enter breed..." value={newCat.breed} required />
        </div>
        <div className="form-field">
          <label><b>Color</b>:</label>
          <input name="color" type="text" onChange={handleInputChange} placeholder="Enter color..." value={newCat.color} required />
        </div>
        <div className="form-field">
          <label><b>Temperament</b>:</label>
          <input name="temperament" type="text" onChange={handleInputChange} placeholder="Enter temperament..." value={newCat.temperament} required />
        </div>
        <div className="form-field">
          <label><b>Image</b>:</label>
          <input name="image" type="text" onChange={handleInputChange} placeholder="Enter image path..." value={newCat.image} required />
        </div>
        <div className="button-wrapper">
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

export default CreateCatForm