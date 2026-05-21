import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MyContainer from '../components/MyContainer';

const MainLayout = () => {
    return (
        <>
        <MyContainer>
        <Navbar />
        <Outlet />
        <Footer />
        </MyContainer>
        </>
    )
}

export default MainLayout