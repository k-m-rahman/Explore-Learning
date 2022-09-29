import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEarthAmerica } from '@fortawesome/free-solid-svg-icons'

const PageName = () => {
    return (
        <div>
            <span className='space-x-1 text-4xl md:text-5xl font-semibold'>
                    <span className=' text-teal-500'>Expl</span>
                    <FontAwesomeIcon className='text-3xl' icon={faEarthAmerica} />
                    <span className=' text-teal-500'>re</span>
                     <span> Learning</span> 
                </span>
        </div>
    );
};

export default PageName;