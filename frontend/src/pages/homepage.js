import React from 'react'
import Navbar from '../components/navbar';
import HeroSection from '../components/hero-section';
import SmallBlogCard from '../components/small-blog-card';
import SmallBlogSection from '../components/small-blogs-section';

const HomePage = () => {
    return (
        <>
            {<Navbar />}
            {<HeroSection />}
            {<SmallBlogSection />}
        </>
    )
}

export default HomePage
