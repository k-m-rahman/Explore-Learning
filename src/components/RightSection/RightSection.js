import React, { useEffect, useState } from 'react';
import { getStoredData } from '../../utilities/fakeDb';
import AddBreak from '../AddBreak/AddBreak';
import LessonDetails from '../LessonDetails/LessonDetails';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';


const RightSection = ({LessonTime , setLessonTime , setPressedCompleted}) => {

    const [breakTime,setBreakTime] = useState(0);

    useEffect(()=>{
        const storedData = getStoredData() ;
        if(storedData.breakTime){
            setBreakTime(storedData.breakTime);
        }    
    },[])


    const lessonCompleted = () => {
        
        if(LessonTime){
            toast('Congratulations! You have completed all the lessons !', {
                autoClose: 1800,
                pauseOnHover: true 
                });
        }
        else{
            swal("Oops!", "At least select one lesson!", "error");
            return ;
        }

        localStorage.removeItem('lessonData');
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
                    <button onClick={lessonCompleted} className='btn btn-primary rounded-lg w-2/3 md:w-1/2 lg:w-full '>Lesson Completed</button>
                    <ToastContainer ></ToastContainer>
                </div>
            </div>

        </div>
    );
};

export default RightSection;