import React, { useState } from 'react';
import { addDataToDb, getStoredData } from '../../utilities/fakeDb';


const Activity = ({activity,setLessonTime , pressedCompleted , setPressedCompleted}) => {
    
    // destructuring the activity object
    const {name,picture , about , time} = activity ;

    // for 'ADD TO LIST' button converted into 'ADDED'
    const [added,setAdded] = useState(false) ;

    // whenever 'Lesson Completed' button pressed all "ADDED" button converted into "ADD TO LIST"
    if(pressedCompleted === true && added===true){
        setAdded(false);

        const buttonList = document.getElementsByClassName('add-to-list-button');
        for(let button of buttonList){
            button.classList.remove('btn-success');
            button.classList.remove('hover:bg-emerald-500');
            button.classList.add('btn-primary');
        }
    }
    
    // for adding lesson activity time into both in local storage and right side of the UI 
    const addLessonTime = (event) => {

        // 
        setPressedCompleted(false) ;

        // adding the lesson time 
        setLessonTime(current => current+time);

        // adding the lesson time into local storage
        const storedData = getStoredData();
        const previousTime = Number(storedData['lessonTime']) ;
        if(previousTime){
            storedData['lessonTime'] = time + previousTime ;
        }
        else{
            storedData['lessonTime'] = time  ;
        }
        addDataToDb(storedData);

        
        // for converting the 'ADD TO LIST' button to 'ADDED'
        setAdded(true);

        event.target.classList.remove('btn-primary');
        event.target.classList.add('btn-success');
        event.target.classList.add('hover:bg-emerald-500');
    }

    return (
        
        <div className="card rounded-lg w-100 bg-base-100 shadow-xl">
            <figure><img className='h-[200px] lg:h-[150px] w-full shadow-sm' src={picture} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{about.length>100?about.slice(0,100):about}</p>
                <p className='font-medium'>Time Required: <span className='font-semibold text-lg'>{time}s</span></p>
                <div className="card-actions ">
                <button onClick={addLessonTime} className="btn btn-primary rounded-lg w-full mt-3 shadow-md  font-bold add-to-list-button">{added?'Added':'Add To List'}</button>
                 </div>
            </div>
        </div>
    );
};

export default Activity;