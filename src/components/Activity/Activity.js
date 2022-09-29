import React from 'react';
import { addDataToDb, getStoredData } from '../../utilities/fakeDb';


const Activity = ({activity,setExerciseTime}) => {
    const {name,picture , about , time} = activity ;
    
    const addLessonTime = () => {
        setExerciseTime(current => current+time);

        const storedData = getStoredData();
        const previousTime = Number(storedData['lessonTime']) ;
        if(previousTime){
            storedData['lessonTime'] = time + previousTime ;
        }
        else{
            storedData['lessonTime'] = time  ;
        }
        
        addDataToDb(storedData);
    }

    return (
        
        <div className="card rounded-lg w-100 bg-base-100 shadow-xl">
            <figure><img className='h-[200px] lg:h-[150px] w-full shadow-sm' src={picture} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{about.length>100?about.slice(0,100):about}</p>
                <p className='font-medium'>Time Required: <span className='font-semibold text-lg'>{time}s</span></p>
                <div className="card-actions ">
                <button onClick={addLessonTime} className="btn btn-primary rounded-lg w-full mt-3 shadow-md focus:bg-emerald-300">Add To List</button>
                 </div>
            </div>
        </div>
    );
};

export default Activity;