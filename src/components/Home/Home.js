import React, { useState,useEffect } from 'react';
import LeftSection from '../LeftSection/LeftSection';
import RightSection from '../RightSection/RightSection';
import {  getStoredData } from '../../utilities/fakeDb';

const Home = () => {

    // for adding the lesson time into the right side of the UI 
    const [LessonTime,setLessonTime] = useState(0);

    // for tracking the click of 'Lesson Completed' button
    const [pressedCompleted,setPressedCompleted] = useState(false) ;

    // for showing the cumulative lesson time added in previous session from local storage
    useEffect(()=>{
        const storedData = getStoredData() ;
        if(storedData.lessonTime){
            setLessonTime(storedData.lessonTime);
        } 
        
    },[])

    
    return (
        <div className='grid grid-cols-1  lg:grid-cols-9'>

            {/* Left section */}
            {/* All the activity/lesson cards */}
            <LeftSection setPressedCompleted={setPressedCompleted} pressedCompleted={pressedCompleted} setLessonTime={setLessonTime}></LeftSection>


            {/* right section */}
            <RightSection setPressedCompleted={setPressedCompleted} pressedCompleted={pressedCompleted} setLessonTime={setLessonTime} LessonTime={LessonTime} ></RightSection>
            
        </div>
    );
};

export default Home;