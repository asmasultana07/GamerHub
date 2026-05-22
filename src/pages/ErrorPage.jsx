import React from "react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import errorImage from '../assets/error-404.png'
import { Link } from "react-router"


const ErrorPage = () => {
    return (
        <>
        <Navbar />
        <section className="flex flex-col justify-center items-center p-20  lg:p-30">
            <img src={errorImage} alt="moveImage" className="w-150 animate-moveImage "/>
            
            <p className="mt-4 text-[#627382] text-[20px]">The page you are looking for is not available.</p>
            <button className="mt-4 rounded-md  my-btn "> 
            <Link to="/"  > Back To Home </Link>
            </button>
        </section>
        <Footer />

        </>
    )
}

export default ErrorPage
