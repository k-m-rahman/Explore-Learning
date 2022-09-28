import React from 'react';
import Activities from '../Activities/Activities';
import PageName from '../PageName/PageName';

const LeftSection = () => {
    return (
        <div className='md:col-span-3 lg:col-span-4 border-2 p-6  md:p-16 flex flex-col gap-8'>

                {/* page name  */}
                <PageName></PageName>


                <h2 className='text-xl font-semibold mt-4'>Select Today's exercise</h2>
                
                <Activities></Activities>
            </div>
    );
};

export default LeftSection;