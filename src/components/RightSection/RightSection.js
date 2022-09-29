import React, { useEffect, useState } from 'react';
import { getStoredData } from '../../utilities/fakeDb';
import AddBreak from '../AddBreak/AddBreak';
import LessonDetails from '../LessonDetails/LessonDetails';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';


const RightSection = ({LessonTime , setLessonTime , setPressedCompleted}) => {

    // for setting the break time 
    const [breakTime,setBreakTime] = useState(0);

    // for getting the break time stored in local storage
    useEffect(()=>{
        const storedData = getStoredData() ;
        if(storedData.breakTime){
            setBreakTime(storedData.breakTime);
        }    
    },[])


    // the actions when "Lesson Completed" button clicked
    const lessonCompleted = () => {
        
        // at least one lesson activity must be selected
        if(LessonTime){
            toast('Congratulations! You have completed the lessons !', {
                autoClose: 1800,
                pauseOnHover: true 
                });
        }
        else{
            swal("Oops!", "At least select one lesson!", "error");
            return ;
        }

        localStorage.removeItem('lessonData');

        // setting initial/default value in every state
        setBreakTime(0);
        setLessonTime(0);
        setPressedCompleted(true);    
    }

    return (
        <div className='p-3 lg:col-span-2'>

            <PersonalInfo></PersonalInfo>

            <div className='sticky top-0'>
                <AddBreak setBreakTime={setBreakTime}></AddBreak>

                <LessonDetails breakTime={breakTime} LessonTime={LessonTime}></LessonDetails>

                <div className='flex justify-center mt-10'>
                    <button onClick={lessonCompleted} className='btn btn-info hover:bg-sky-500 rounded-lg w-2/3 md:w-1/2 lg:w-full font-bold'>Lesson Completed</button>
                    <ToastContainer ></ToastContainer>
                </div>
            </div>

        </div>
    );
};

export default RightSection;