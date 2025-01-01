import React from 'react';
import Header from '../Header/Header';
import Categories from '../Categories/Categories';
import Jobs from '../Jobs/Jobs';

const Home = () => {
    return (
        <div>
            <Header />
            <Categories />
            <Jobs />
        </div>
    );
};

export default Home;