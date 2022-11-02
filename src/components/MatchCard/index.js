// Write your code here
import './index.css'

const MatchCard = props => {
  const {eachMatch} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = eachMatch
  return (
    <li>
      <div className="matchCard">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="competingTeamLogo"
        />
        <p className="competingTeamText">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={`matchStatus ${matchStatus}`}>{matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
