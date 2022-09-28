import React from 'react';
import LeftSection from '../LeftSection/LeftSection';
import RightSection from '../RightSection/RightSection';

const Home = () => {
    return (
        <div className='grid grid-cols-1  lg:grid-cols-9'>

            {/* Left section */}
            <LeftSection></LeftSection>

            {/* right section */}
            <RightSection></RightSection>
        </div>
    );
};

export default Home;