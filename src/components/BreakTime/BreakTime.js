import React,{ useState }  from 'react';
import { addDataToDb, getStoredData } from '../../utilities/fakeDb';




const BreakTime = ({breakTime , setBreakTime ,pressedCompleted , setPressedCompleted}) => {

    const [selectedBreakTime,setSelectedBreakTime] = useState(false);

  
    if(pressedCompleted === true && selectedBreakTime===true){
      
        setSelectedBreakTime(false);
        
        const breakTimeButtons = document.getElementsByClassName('breakTimeButtons');
        for(let breakTimeButton of breakTimeButtons){
            breakTimeButton.classList.add('bg-white');
            breakTimeButton.classList.remove('bg-teal-500');
            breakTimeButton.classList.remove('text-white');
        }
    }
    

    // for setting the clicked break time both into local storage and lower portion of the UI 
    const addBreakTime = (event) => {

        setPressedCompleted(false) ;

        setBreakTime(breakTime) ;
        const storedData = getStoredData();
        storedData['breakTime'] = breakTime ;
        addDataToDb(storedData);
      
           
        
        const breakTimeButtons = document.getElementsByClassName('breakTimeButtons');

        for(let breakTimeButton of breakTimeButtons){
            
            if(event.target.id==breakTimeButton.id){ 
                breakTimeButton.classList.remove('bg-white');
                breakTimeButton.classList.add('bg-teal-500');
                breakTimeButton.classList.add('text-white');
            }
            else{
                breakTimeButton.classList.add('bg-white');
                breakTimeButton.classList.remove('bg-teal-500');
                breakTimeButton.classList.remove('text-white');
            }
        }

        setSelectedBreakTime(true);

}

    return (
       
            <button id={breakTime} onClick={addBreakTime} className='p-2 bg-white rounded-full shadow-lg font-semibold text-sm breakTimeButtons' >{breakTime}s</button>

    );
};

export default BreakTime;