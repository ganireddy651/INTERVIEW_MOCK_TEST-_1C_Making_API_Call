import {Component} from 'react'
import Loader from 'react-loader-spinner'
import DisplayPackage from './components/DisplayPackage'
import './App.css'

class App extends Component {
  state = {data: [], isLoading: false}

  componentDidMount() {
    this.getPackages()
  }

  getPackages = async () => {
    this.setState({isLoading: true})
    const url = 'https://apis.ccbp.in/tg/packages'
    const option = {
      method: 'GET',
    }
    const response = await fetch(url, option)
    const data = await response.json()
    // console.log(data)
    if (response.ok === true) {
      const updatedData = data.packages.map(each => ({
        id: each.id,
        description: each.description,
        imageUrl: each.image_url,
        name: each.name,
      }))
      this.setState({data: updatedData, isLoading: false})
    }
  }

  render() {
    const {data, isLoading} = this.state
    return (
      <div className="app-container">
        <div className="heading-container">
          <button type="button" className="main-heading">
            Travel Guide
          </button>
        </div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="list-container">
            {data.map(eachPackage => (
              <DisplayPackage eachPackage={eachPackage} key={eachPackage.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default App
