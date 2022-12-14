import React, { useEffect, useState } from 'react';
import Activity from '../Activity/Activity';

const Activities = ({setLessonTime , pressedCompleted , setPressedCompleted}) => {

    // for fetching the activities data
    const [activities,setActivities] = useState([]) ;

    useEffect(()=>{
        fetch('SampleActivities.json')
        .then(res => res.json())
        .then(data => setActivities(data));
    },[])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                activities?.map(activity => <Activity setPressedCompleted={setPressedCompleted} pressedCompleted={pressedCompleted} setLessonTime={setLessonTime} activity={activity} key={activity._id}></Activity>)
            }
        </div>
    );
};

export default Activities;