import React, { useState } from "react";
import allGames from "../data/games.json";
import { FaSearch } from "react-icons/fa";

const Games = () => {
  const [search, setSearch] = useState("");

  const term = search.trim().toLocaleLowerCase();
  const searchGames = allGames.filter((game) =>
    game.title.toLocaleLowerCase().includes(term),
  );

  return (
    <>
      <div className="flex justify-between items-center mt-6 mx-4">
        <h3>
          <span className="font-semibold text-primary text-lg md:text-xl">
             {searchGames.length}{" "}
            {searchGames.length === 1 ? "Game Found" : "Games Found"}
          </span>
        </h3>
        <label className="bg-slate-200 shadow flex items-center gap-2 p-2 rounded-sm">
          <FaSearch className="w-5 h-5  " />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            name="search"
            placeholder="Search Games by title..."
            className="text-start text-pp font-semibold flex-1 outline-none bg-transparent "
          />
        </label>
      </div>

        {allGames.length > 0 ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 m-4">
        {allGames.map((game) => (
          <div
            key={game.id}
            className="flex flex-col justify-between bg-base-200 border border-slate-100 rounded-xl shadow-md overflow-hidden"
          >
            <div>
              <img
                src={game.coverPhoto}
                alt={game.title}
                className="w-full h-48 object-cover border-b border-base-100"
              />
              <div className="p-4">
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                  {game.category}
                </span>
                <h2 className="text-xl font-bold text-slate-300 mt-1 line-clamp-1">
                  {game.title}
                </h2>
                <p className="text-slate-600 text-sm mt-2 line-clamp-2">
                  {game.description}
                </p>
              </div>
            </div>
            <div className="px-4 py-2 flex justify-between items-center border-t">
              <span className="text-amber-400">&#9733; {game.ratings}</span>
              <a
                href="/game-details"
                className="px-4 py-2 rounded-lg border border-base-100 text-base-100 font-medium hover:bg-base-100 hover:text-base-200 transition"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
        
      </div>
        ) : (
            <div className="col-span-full">
              <div className="flex flex-col justify-center items-center gap-4">
              
              <h1 className="text-pp text-3xl md:text-5xl font-semibold mt-4">OPPS!! GAME NOT FOUND</h1>
              <p className="text-pp text-center md:text-2xl">The Game you are requesting is not found on our system.  Please try another one</p>
              <button className="mt-6 rounded-md text-white text-[16px]  btn px-5
                                bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:from-pink-500 hover:to-purple-500"> 
            <Link to="/all-games" onClick={() => setSearch("")} > See All Games </Link>
            </button>
              </div>
            </div>
        )}
    </>
  );
};

export default Games;
