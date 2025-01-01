import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(response => response.json())
            .then(data => setCategories(data))
    }, []);

    return (
        <div className='container mx-auto py-10 mt-10 text-center'>
            <div>
                <h1 className='text-3xl font-bold'>Explore Diverse <span className='text-warning'>Job Categories</span></h1>
                <p className='w-full lg:w-1/2 mx-auto px-5 text-sm my-5'>At Career Hub, we connect you to opportunities across various industries and professions. Whether you're passionate about technology, creative arts, healthcare, business, or education, our platform offers job categories tailored to your interests and skills. Find the perfect role that matches your ambition and start building a fulfilling career today!</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10'>
                {
                    categories.map(category => <Category
                        key={category.id}
                        category={category}
                    />)
                }
            </div>
        </div>
    );
};

export default Categories;