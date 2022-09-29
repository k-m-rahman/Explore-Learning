import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const PersonalInfo = () => {
    return (
        <div className='p-3'>

            {/* Name , picture and location */}
            <div className='flex gap-4 items-center justify-center'>
                <img className="rounded-full w-1/5 lg:w-1/5 md:w-[12%]" src="https://phero-web.nyc3.cdn.digitaloceanspaces.com/website-prod-images/public/files/1660118580754.png" alt=''></img>
                <div className=''>
                    <h3 className='font-semibold text-md'>Khandakar Mahmudur Rahman</h3>
                    <p className='text-sm text-slate-600'> <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> Dhaka,Bangladesh</p>
                </div>
            </div>

            {/* weight , height and age */}

            <div className='flex gap-5 bg-blue-100 p-3 justify-center items-center rounded-xl mt-5 shadow-lg w-2/3 lg:w-full mx-auto text-center'>
                <div>
                    <h2 className='font-bold'>Web Developer</h2>
                    <h3 className='text-xs font-medium text-slate-700'>Occupation</h3>
                </div>
                <div>
                    <h2 className='font-bold'>3.00</h2>
                    <h3 className='text-xs font-medium text-slate-700'>CG</h3>
                </div>
                <div>
                    <h2 className='font-bold'>28<span className='text-sm text-slate-600'>yrs</span></h2>
                    <h3 className='text-xs font-medium text-slate-700'>Age</h3>
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;