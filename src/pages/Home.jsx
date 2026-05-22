import React from "react"
import useTitle from '../hooks/useTitle';
import MyContainer from "../components/MyContainer";
import Banner from "../components/Homepage/Banner";
import PopularGames from "../components/Homepage/PopularGames";
import Newsletter from "../components/Homepage/Newsletter";
import Blogs from "../components/Homepage/Blogs";

const Home = () => {
    useTitle("Home")

    return (
        <>
        <Banner></Banner>
        <div className="flex flex-col mt-10 mb-4"> 
            <h1 className="text-center  text-3xl font-bold text-base-200">POPULAR GAMES</h1>
            <a href="/all-games" className="self-end text-primary font-semibold hover:underline">
                View All Games <span className="text-lg pr-4">→</span>
            </a>
        </div>
        <PopularGames></PopularGames>
        <Blogs></Blogs>
        <Newsletter></Newsletter>
        </>
    

    )       
}

export default Home;