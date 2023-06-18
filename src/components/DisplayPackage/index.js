import './index.css'

const DisplayPackage = props => {
  const {eachPackage} = props
  const {name, description, imageUrl} = eachPackage

  return (
    <li>
      <div className="card">
        <img className="image" src={imageUrl} alt={name} />
        <div className="package-details-container">
          <h1 className="package-heading">{name}</h1>
          <p className="description">{description}</p>
        </div>
      </div>
    </li>
  )
}

export default DisplayPackage
