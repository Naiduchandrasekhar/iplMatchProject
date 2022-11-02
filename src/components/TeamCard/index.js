// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {allTeams} = props
  const {id, name, teamImageUrl} = allTeams
  return (
    <Link className="linkClass" to={`/team-matches/${id}`}>
      <li className="teamsCardContainer">
        <img src={teamImageUrl} alt={name} className="iplTeamLogos" />
        <p className="teamName">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
