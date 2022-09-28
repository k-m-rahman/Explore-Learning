import React from 'react';

const Activity = ({activity,setExerciseTime}) => {
    const {name,picture , about , time} = activity ;
    return (
        
        <div className="card rounded-lg w-100 bg-base-100 shadow-xl">
            <figure><img className='h-[200px] lg:h-[150px] w-full shadow-sm' src={picture} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{about.length>100?about.slice(0,100):about}</p>
                <p className='font-medium'>Time Required: <span className='font-semibold text-lg'>{time}s</span></p>
                <div className="card-actions ">
                <button onClick={()=>{setExerciseTime((current)=>current+time)}} className="btn btn-primary rounded-lg w-full mt-3">Add To List</button>
                 </div>
            </div>
        </div>
    );
};

export default Activity;