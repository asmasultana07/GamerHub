import React from 'react'

const Newsletter = () => {
  return (
    <>
    <div className="w-full bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white border border-slate-800 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
  {/* ব্যাকগ্রাউন্ড ব্লাড গ্লো ইফেক্ট */}
  <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"></div>
  
  <div className="max-w-2xl mx-auto text-center relative z-10">
    <span className="text-purple-500 font-bold tracking-widest text-xs uppercase bg-purple-500/10 px-3 py-1 rounded-full">
      Stay Updated
    </span>
    <h2 className="text-2xl md:text-4xl font-black text-white mt-4 mb-3">
      Get the Latest Gaming News First!
    </h2>
    <p className="text-slate-400 text-sm md:text-base mb-8">
      Subscribe to our newsletter and never miss exclusive giveaways, discount codes, and new game releases.
    </p>
    
    {/* ইনপুট বক্স ও বাটন */}
    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input 
        type="email" 
        placeholder="Enter your email address" 
        className="w-full bg-transparent rounded-3xl border border-slate-800 text-white px-5 py-3 focus:outline-none  focus:border-purple-500 text-sm placeholder-slate-500 transition"
    />
      <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3.5 rounded-xl transition shadow-lg shadow-purple-600/30 text-sm whitespace-nowrap">
        Join Squad 🚀
      </button>
    </form>
  </div>
</div>


</>
  )
}

export default Newsletter