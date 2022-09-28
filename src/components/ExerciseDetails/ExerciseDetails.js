import React from 'react';

const ExerciseDetails = () => {
    return (
        <div className='py-3 text-center mt-7'>
            <h2 className='font-semibold text-md'>Exercise Details</h2>

            <div className='flex  bg-blue-100 py-3 px-6 justify-between rounded-xl mt-5 shadow-lg w-2/3 md:w-1/2 lg:w-full mx-auto items-center'>
                <span className='font-medium'>Exercise Time</span>
                <span className='text-sm text-gray-500'>200s</span>
            </div>

            <div className='flex  bg-blue-100 py-3 px-6 justify-between rounded-xl mt-5 shadow-lg w-2/3 md:w-1/2 lg:w-full mx-auto items-center'>
                <span className='font-medium'>Break Time</span>
                <span className='text-sm text-gray-500'>30s</span>
            </div>
        </div>
    );
};

export default ExerciseDetails;