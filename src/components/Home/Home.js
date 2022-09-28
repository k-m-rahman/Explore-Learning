import React, { useState } from 'react';
import LeftSection from '../LeftSection/LeftSection';
import RightSection from '../RightSection/RightSection';

const Home = () => {

    const [exerciseTime,setExerciseTime] = useState(0);

    return (
        <div className='grid grid-cols-1  lg:grid-cols-9'>

            {/* Left section */}
            <LeftSection setExerciseTime={setExerciseTime}></LeftSection>

            {/* right section */}
            <RightSection exerciseTime={exerciseTime} ></RightSection>
        </div>
    );
};

export default Home;