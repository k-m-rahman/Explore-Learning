import React, { useState,useEffect } from 'react';
import LeftSection from '../LeftSection/LeftSection';
import RightSection from '../RightSection/RightSection';
import {  getStoredData } from '../../utilities/fakeDb';

const Home = () => {

    const [LessonTime,setLessonTime] = useState(0);


    useEffect(()=>{
        const storedData = getStoredData() ;
        if(storedData.lessonTime){
            setLessonTime(storedData.lessonTime);
        } 
        
    },[])

    
    return (
        <div className='grid grid-cols-1  lg:grid-cols-9'>

            {/* Left section */}
            <LeftSection  setLessonTime={setLessonTime}></LeftSection>

            {/* right section */}
            <RightSection setLessonTime={setLessonTime} LessonTime={LessonTime} ></RightSection>
        </div>
    );
};

export default Home;