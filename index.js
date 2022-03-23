const fetch = require("cross-fetch");

async function getTeamGoals(teamKey) {
  let homeSum = 0
  let awaySum = 0
 
  const data = await fetch("https://s3.eu-west-1.amazonaws.com/hackajob-assets1.p.hackajob/challenges/football_session/football.json")

  const jsonData = await data.json();
  const rounds = jsonData.rounds
  rounds.forEach(round => {
    round.matches.map(match => {
     if (match.team1.key === teamKey) {
      homeSum += match.score1
      }
    if (match.team2.key === teamKey) {
      awaySum += match.score2
    }
    })
  }); 
  let total = homeSum + awaySum
  
  return total
}




getTeamGoals("manutd");
getTeamGoals('liverpool')
module.exports = { getTeamGoals };
