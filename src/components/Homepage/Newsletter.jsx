import React from "react";

const Newsletter = () => {
  return (
    <div className="my-10 w-full my-bg text-white  rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
      <div className="mb-6 max-w-2xl mx-auto text-center relative z-10">
        <span className="text-purple-500 font-bold tracking-widest text-xs uppercase bg-purple-500/10 px-3 py-1 rounded-full">
          Stay Updated
        </span>
        <h2 className="text-2xl md:text-4xl font-black text-white mt-4 mb-3">
          Get the Latest Gaming News First!
        </h2>
        <p className="text-slate-400 text-sm md:text-base mb-8">
          Subscribe to our newsletter and never miss exclusive giveaways,
          discount codes, and new game releases.
        </p>
      </div>
      <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
        <input type="email" name="email" placeholder="Enter your email address"
        className="w-full text-sm text-white bg-transparent rounded-md border border-slate-300 px-5 py-3 focus:outline-none placeholder-slate-500 transition" />
      <button className="bg-base-200 hover:bg-base-100 font-semibold px-6 py-3 rounded-md transition  whitespace-nowrap ">
        Subscribe
      </button>
      </form>
    </div>
  );
};

export default Newsletter;
