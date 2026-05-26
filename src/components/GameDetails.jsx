import React from "react";
import { Link, useParams } from "react-router";
import gamesData from "../data/games.json";
import useTitle from "../hooks/useTitle";

const GameDetails = () => {
  useTitle("GameDetails");
  const { id } = useParams();
  const game = gamesData.find((g) => g.id === id);

  if (!game) {
    return (
      <div className="col-span-full my-14 md:my-8 ">
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-primary text-3xl md:text-5xl font-semibold mt-4">
            OPPS!! GAME NOT FOUND
          </h1>
          <p className="text-base-200 text-center text-lg md:text-2xl">
            The Game you are requesting is not found on our system. Please try
            another one
          </p>
          <button className="mt-6 rounded-md px-5 my-btn">
            <Link to="/all-games">See All Games</Link>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2  gap-10 bg-slate-900 px-10 md:px-20 lg:px-40 py-20">
      
      <div className=" w-full md:h-130 rounded-xl shadow-md shadow-fuchsia-700  overflow-hidden">
        <img src={game.coverPhoto} alt="image loading" className="w-full md:h-130 object-cover"/>
      </div>

      <div className=" p-2">
        <div className="p-4">
          <span className="bg-purple-600 text-xs text-base-300 font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            {game.category}
          </span>
          <h2 className="text-base-300 text-2xl md:text-5xl font-black mt-3 mb-14 tracking-tight leading-tight">
            {game.title}
          </h2>
          <p className="text-base-300">Dev: {game.developer}</p>
          <p className="text-slate-400 text-sm md:text-base mt-2 mb-6">
            {game.description}
          </p>
         </div>
        <div className="p-4 border-t border-slate-50 flex items-center gap-6">
          <span className="text-amber-400">&#9733; {game.ratings}</span>
          <a
            href={game.downloadLink}
            target="_blank"
            rel="noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white text-md px-4 py-2 rounded-sm font-medium transition"
          >
            Download Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
