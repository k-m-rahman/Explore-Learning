import React from 'react';
import LeftSection from '../LeftSection/LeftSection';
import RightSection from '../RightSection/RightSection';

const Home = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5'>

            {/* Left section */}
            <LeftSection></LeftSection>

            {/* right section */}
            <RightSection></RightSection>
        </div>
    );
};

export default Home;