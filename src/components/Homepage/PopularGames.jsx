import React from 'react'
import gamesData from '../../data/games.json'


const PopularGames = () => {

  const popularGames = gamesData.slice(0,4);

  return (
    <div>
      <h1>Popular Games</h1>
      <a href="/all-games">View All Games →</a>
    </div>
    <div>
      {popularGames.map((game) => ())}
    </div>
  )
}

export default PopularGames