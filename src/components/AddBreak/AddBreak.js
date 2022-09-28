import React from 'react';

const AddBreak = ({setBreakTime}) => {

    const breakTimes = [10,20,30,40,50]
    return (
        <div className='py-3 text-center mt-7'>
            <h2 className='font-semibold text-md'>Add A Break</h2>

            <div className='flex gap-3 lg:gap-2 bg-blue-100 p-3 justify-center rounded-xl mt-5 shadow-lg  text-center w-5/6 md:w-1/2 lg:w-full mx-auto '>
                {
                    breakTimes.map(breakTime =><button onClick={()=>setBreakTime(breakTime)} className='p-2 bg-white rounded-full font-semibold text-sm focus:text-white focus:bg-teal-500'>{breakTime}s</button> )
                }
                         
            </div>
        </div>
    );
};

export default AddBreak;