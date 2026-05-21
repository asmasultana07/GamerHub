import React from 'react'
import gamesData from '../../data/games.json'


const PopularGames = () => {

  const popularGames = gamesData.slice(0,4);

  return (
     <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-4'>
      {popularGames.map((game) => (
        <div key={game.id} className="flex flex-col justify-between bg-base-200 border border-slate-100 rounded-xl shadow-md overflow-hidden">
          <div>
              <img src={game.coverPhoto} alt={game.title} className="w-full h-48 object-cover border-b border-base-100" />
              <div className="p-4">
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">{game.category}</span>
                <h2 className="text-xl font-bold text-slate-300 mt-1 line-clamp-1">{game.title}</h2>
                <p className="text-slate-600 text-sm mt-2 line-clamp-2">{game.description}</p>
              </div>
          </div>
          <div className='px-4 py-2 flex justify-between items-center border-t'>
            <span className='text-amber-400'>&#9733; {game.ratings}</span>
            <a href="/game-details" className="px-4 py-2 rounded-lg border border-base-100 text-base-100 font-medium hover:bg-base-100 hover:text-base-200 transition">
          View Details
        </a>
          </div>
        </div>
      ))}
    </div>
    
  )
}

export default PopularGames