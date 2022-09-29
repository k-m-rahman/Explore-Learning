const addDataToDb = (lessonData) => {
    localStorage.setItem('lessonData',JSON.stringify(lessonData));

}

const getStoredData = () => {
    
    let lessonData = {};

    //get the shopping Data from local storage
    const storedData = localStorage.getItem('lessonData');
    if(storedData){
        lessonData = JSON.parse(storedData);
    }

    return lessonData ;
}


export {addDataToDb,
        getStoredData        
}