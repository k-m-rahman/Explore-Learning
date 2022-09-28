import React from 'react';
import Activities from '../Activities/Activities';
import PageName from '../PageName/PageName';

const LeftSection = ({setExerciseTime}) => {
    return (
        <div className='lg:col-span-7 p-6  md:p-16 flex flex-col gap-8 bg-slate-50 shadow-xl'>

                {/* page name  */}
                <PageName></PageName>


                <h2 className='text-xl font-semibold mt-4'>Select Today's Lessons</h2>
                
                <Activities setExerciseTime={setExerciseTime}></Activities>
            </div>
    );
};

export default LeftSection;