// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails
  return (
    <div className="secondCard">
      <div className="competingTeamImageContainer">
        <div>
          <p className="competingTeamTxt">{competingTeam}</p>
          <p className="dateTxt">{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competingTeam"
          />
        </div>
      </div>
      <div>
        <p>First Innings</p>
        <p>{firstInnings}</p>
        <p>Second Innings</p>
        <p>{secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
