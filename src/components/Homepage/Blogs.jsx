import React from "react";
import blogsData from "../../data/blogs.json";

const Blogs = () => {
  return (
    <div>
      <div className="bg-slate-950 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black mb-8 tracking-wide border-l-4 border-purple-500 pl-3">
            LATEST ARTICLES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogsData.map((blog) => (
              <div className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-purple-500/50 transition">
                <div key={blog.id}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.coverPhoto}
                      alt="Game"
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    />
                    <span className="absolute top-4 left-4 text-xs text-base-200 bg-base-100 font-bold rounded-full px-3 py-1">
                      {blog.category}
                    </span>
                  </div>
                  <div className="px-4 py-2 border-t">
                    <p className="text-xs text-slate-400 my-2">{blog.date}</p>
                    <h3 className="text-xl font-bold line-clamp-2 group-hover:text-purple-400 transition">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-3 line-clamp-2">
                      {blog.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
