const About = () => {
  return (
    <div className="about-page-wrapper">
      <h1>Cat Tree in Fullstack Bloom</h1>
      <h4>
        <em>
          An app that facilitates the transfer of rescue cats from shelters to
          their fur-ever homes
        </em>
      </h4>
      <div className="about-page-body">
        <div className="cat-tree-img-wrapper">
          <img
            className="cat-tree-img"
            src="https://i.imgur.com/U3GcEQ4.jpeg"
            alt="cat tree"
          />
        </div>
        <div className="instructions-wrapper">
          <p className="instructions-intro-paragraph">
            Please follow the instructions below:
          </p>
          <p>Access information about each cat sanctuary on the homepage.</p>
          <p>Click on an individual shelter to view its available cats.</p>
          <p>
            Admit a new cat to the shelter by submitting the form that appears
            on button click.
          </p>
          <p>
            Change a cat's name to "Anonymous," in case its new family wishes to
            rename it.
          </p>
          <p>
            Remove a cat from the shelter on button click once it is adopted.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
