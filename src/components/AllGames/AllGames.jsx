// src/pages/Home.jsx
import React from 'react';
import gamesData from '../../data/games.json';

export default function PopularGames() {
  // slice(0, 4) এর মাধ্যমে প্রথম ৪টি গেম আলাদা করে একটা নতুন ভেরিয়েবলে রাখলাম
  const featuredGames = gamesData.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800">Featured Games</h2>
        <a href="/all-games" className="text-purple-600 font-semibold hover:underline">
          View All Games →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredGames.map((game) => (
          <div key={game.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 flex flex-col justify-between">
            <div>
              <img src={game.coverPhoto} alt={game.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">{game.category}</span>
                <h2 className="text-xl font-bold text-slate-800 mt-1 line-clamp-1">{game.title}</h2>
                <p className="text-slate-600 text-sm mt-2 line-clamp-2">{game.description}</p>
              </div>
            </div>
            
            <div className="p-4 border-t border-slate-50 flex items-center justify-between">
              <span className="text-amber-500 font-semibold">⭐ {game.ratings}</span>
              <a href={game.downloadLink} target="_blank" rel="noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-lg font-medium transition">
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}