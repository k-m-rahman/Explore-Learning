import React from 'react';

const AddBreak = () => {
    return (
        <div className='py-3 text-center mt-7'>
            <h2 className='font-semibold text-md'>Add A Break</h2>

            <div className='flex gap-2 bg-blue-100 p-3 justify-center rounded-xl mt-5 shadow-lg  text-center md:w-1/2 lg:w-full mx-auto '>
                <button className='p-2 bg-white rounded-full font-semibold text-sm focus:text-white focus:bg-teal-500'>10s</button>
                <button className='p-2 bg-white rounded-full font-semibold text-sm focus:text-white focus:bg-teal-500'>20s</button>
                <button className='p-2 bg-white rounded-full font-semibold text-sm focus:text-white focus:bg-teal-500'>30s</button>
                <button className='p-2 bg-white rounded-full font-semibold text-sm focus:text-white focus:bg-teal-500'>40s</button>
                <button className='p-2 bg-white rounded-full font-semibold text-sm focus:text-white focus:bg-teal-500'>50s</button>
                
                
            </div>
        </div>
    );
};

export default AddBreak;