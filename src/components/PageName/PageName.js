import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEarthAmerica } from '@fortawesome/free-solid-svg-icons'

const PageName = () => {
    return (
        <div>
            <span className='space-x-1'>
                    <span className='text-4xl font-semibold text-teal-500'>Expl</span>
                    <FontAwesomeIcon className='text-2xl' icon={faEarthAmerica} />
                    <span className='text-4xl font-semibold text-teal-500'>re</span>
                     <span className='text-4xl font-semibold'> Learning</span> 
                </span>
        </div>
    );
};

export default PageName;