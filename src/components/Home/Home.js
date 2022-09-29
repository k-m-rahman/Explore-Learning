import React, { useState,useEffect } from 'react';
import LeftSection from '../LeftSection/LeftSection';
import RightSection from '../RightSection/RightSection';
import {  getStoredData } from '../../utilities/fakeDb';

const Home = () => {

    const [LessonTime,setLessonTime] = useState(0);

    const [pressedCompleted,setPressedCompleted] = useState(false) ;


    useEffect(()=>{
        const storedData = getStoredData() ;
        if(storedData.lessonTime){
            setLessonTime(storedData.lessonTime);
        } 
        
    },[])

    
    return (
        <div className='grid grid-cols-1  lg:grid-cols-9'>

            {/* Left section */}
            <LeftSection setPressedCompleted={setPressedCompleted} pressedCompleted={pressedCompleted} setLessonTime={setLessonTime}></LeftSection>

            {/* right section */}
            <RightSection setPressedCompleted={setPressedCompleted} setLessonTime={setLessonTime} LessonTime={LessonTime} ></RightSection>
            
        </div>
    );
};

export default Home;