// Write your code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {iplTeams: [], isLoading: true}

  componentDidMount() {
    this.getIPLTeamsData()
  }

  getIPLTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamsData = await response.json()
    const {teams} = teamsData
    const updatedData = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({iplTeams: updatedData, isLoading: false})
  }

  render() {
    const {iplTeams, isLoading} = this.state

    return (
      <div className="mainContainer">
        {isLoading ? (
          <div className="loader-container">
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={80}
              width={80}
            />
          </div>
        ) : (
          <>
            <div className="imageContainer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt=" ipl logo"
                className="iplLogo"
              />
              <h1 className="dashboardName">IPL Dashboard</h1>
            </div>
            <ul className="unorderTeamsContainer">
              {iplTeams.map(eachTeam => (
                <TeamCard key={eachTeam.id} allTeams={eachTeam} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default Home
