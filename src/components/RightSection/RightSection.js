import React from 'react';
import AddBreak from '../AddBreak/AddBreak';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import PersonalInfo from '../PersonalInfo/PersonalInfo';

const RightSection = () => {



    return (
        <div className='p-3 lg:col-span-2'>
            <PersonalInfo></PersonalInfo>

            <AddBreak></AddBreak>

            <ExerciseDetails></ExerciseDetails>

            <div className='flex justify-center'>
            <button className='btn btn-primary rounded-lg w-2/3 md:w-1/2 lg:w-full '>Activity Completed</button>
            </div>

        </div>
    );
};

export default RightSection;