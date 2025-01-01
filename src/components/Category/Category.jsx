import React from 'react';

const Category = ({ category }) => {
    const { id, logo, category_name, availability } = category;
    return (
        <div className='container mx-auto py-10 text-center
        border rounded border-base-400'>
            <div>
                <img className='mx-auto w-20 h-20' src={logo} alt={category_name} />
                <h1 className='text-2xl font-bold'>{category_name}</h1>
                <p className='text-sm my-5'>{availability} jobs available</p>
            </div>
        </div>
    );
};

export default Category;