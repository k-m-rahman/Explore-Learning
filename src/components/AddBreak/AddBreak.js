import React from 'react';
import BreakTime from '../BreakTime/BreakTime';


const AddBreak = ({setBreakTime ,pressedCompleted , setPressedCompleted }) => {
    
    const breakTimes = [10,20,30,40,50] ;

    

    return (
        <div className='py-3 text-center mt-7'>
            <h2 className='font-bold text-lg'>Add A Break</h2>

            <div className='flex gap-3 lg:gap-2 bg-blue-100 p-3 justify-center rounded-xl mt-5 shadow-lg  text-center w-5/6 md:w-1/2 lg:w-full mx-auto '>
                {
                    breakTimes.map(breakTime => <BreakTime breakTime={breakTime} setBreakTime={setBreakTime} setPressedCompleted={setPressedCompleted} pressedCompleted={pressedCompleted} key={breakTime}></BreakTime> )
                }
                         
            </div>
        </div>
    );
};

export default AddBreak;