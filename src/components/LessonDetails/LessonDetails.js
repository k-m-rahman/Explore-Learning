import React from 'react';

const LessonDetails = ({LessonTime,breakTime}) => {
    
    return (
        <div className='py-3 text-center mt-7'>
            <h2 className='font-bold text-lg'>Lesson Details</h2>

            {/* lesson time */}
            <div className='flex  bg-blue-100 py-3 px-6 justify-between rounded-xl mt-5 shadow-lg w-2/3 md:w-1/2 lg:w-full mx-auto items-center'>
                <span className='font-bold'>Lesson Time</span>
                <span className='text-sm font-semibold text-gray-500'>{LessonTime}s</span>
            </div>

            {/* Break time  */}
            <div className='flex  bg-blue-100 py-3 px-6 justify-between rounded-xl mt-5 shadow-lg w-2/3 md:w-1/2 lg:w-full mx-auto items-center'>
                <span className='font-bold'>Break Time</span>
                <span className='text-sm font-semibold text-gray-500'>{breakTime}s</span>
            </div>
        </div>
    );
};

export default LessonDetails;