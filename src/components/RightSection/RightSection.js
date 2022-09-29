import React, { useEffect, useState } from 'react';
import { getStoredData } from '../../utilities/fakeDb';
import AddBreak from '../AddBreak/AddBreak';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import PersonalInfo from '../PersonalInfo/PersonalInfo';

const RightSection = ({exerciseTime}) => {

    const [breakTime,setBreakTime] = useState(0);

    useEffect(()=>{
        const storedData = getStoredData() ;
        if(storedData.breakTime){
            setBreakTime(storedData.breakTime);
        }    
    },[])

    return (
        <div className='p-3 lg:col-span-2'>

            <PersonalInfo></PersonalInfo>

            <div className='sticky top-0'>
                <AddBreak setBreakTime={setBreakTime}></AddBreak>

                <ExerciseDetails breakTime={breakTime} exerciseTime={exerciseTime}></ExerciseDetails>

                <div className='flex justify-center mt-10'>
                    <button className='btn btn-primary rounded-lg w-2/3 md:w-1/2 lg:w-full '>Activity Completed</button>
                </div>
            </div>

        </div>
    );
};

export default RightSection;