import React from 'react';
import banner from '../../../src/assets/images/user.png';
const Header = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center container mx-auto bg-slate-400 px-10'>
            <div>
                <h1 className="text-4xl font-bold">Start Your Career the Right Way!</h1>
                <p className="text-sm mt-5">Career Hub is your trusted partner in building the career of your dreams. We offer expert guidance, skill development opportunities, and modern training programs to help you stay ahead.</p>
                <button className='btn btn-warning mt-5'>Explore New</button>
            </div>
            <div>
                <img className='' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Header;