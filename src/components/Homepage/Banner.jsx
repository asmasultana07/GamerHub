import React from 'react';
import gamesData from '../../data/games.json';
import MyContainer from '../../components/MyContainer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


const Banner = () => {
  const games = gamesData.slice(0, 5);

  return (
    <div className='w-full bg-slate-900 '>
      <MyContainer>
        <Swiper 
          modules={[Pagination, Autoplay, EffectFade]}
          effect={'fade'}
          speed={800}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false,}}
          pagination={{ clickable: true }}
          className="overflow-hidden h-100 md:h-[500px] shadow-2xl relative"
         > 
            {games.map((game) => (
              <SwiperSlide key={game.id} className="w-full h-full relative">
                <img src={game.coverPhoto} alt={game.title} className="w-full h-full object-cover object-top" />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/60 to-transparent flex items-end">
                  <div className="p-6 md:p-12 max-w-2xl text-white">
                  <span className="bg-purple-600 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {game.category}
                  </span>
                  <h1 className="text-2xl md:text-5xl font-black mt-3 mb-4 tracking-tight leading-tight">
                    {game.title}
                  </h1>
                  <p className="text-slate-300 text-sm md:text-base mb-6 line-clamp-2 md:line-clamp-3">
                    {game.description}
                  </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </MyContainer>
    </div>

  )
}

export default Banner;