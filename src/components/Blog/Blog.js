import React from 'react';

const Blog = () => {
    return (
        <div className='my-14 mx-4 lg:w-3/4 lg:mx-auto text-center bg-indigo-200 shadow-xl py-3 pb-10 rounded-xl'>

            <h1 className='text-4xl font-[600] m-12'>Blogs</h1>

            {/* How does react work ? */}
            <div className="collapse shadow-lg w-[93%]  md:w-4/5 mx-auto rounded-md ">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title text-2xl font-semibold bg-sky-50 text-primary-content peer-checked:bg-white text-center">
                    How does react work ?
                </div>
                <div className="collapse-content  text-primary-content peer-checked:bg-white peer-checked:text-secondary-content text-lg text-left"> 
                    <p className='p-6'>ReactJS is one of the most popular JavaScript libraries for mobile and web application development created by Facebook.React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.One of the biggest advantages of using React is that we can infuse HTML code with JavaScript which is known as JSX. Users can create a representation of a DOM node by declaring the Element function in React.When updates are made React compares the current DOM to the virtual DOM and only updates the differences between the two using diff algorithm.This process is called reconciliation. </p>
                </div>
            </div>

            {/* Props vs State */}
            <div className="collapse shadow-lg w-[93%]  md:w-4/5 mx-auto rounded-md mt-5">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title text-2xl font-semibold bg-sky-50 text-primary-content peer-checked:bg-white text-center">
                Props vs State
                </div>
                <div className="collapse-content  text-primary-content peer-checked:bg-white peer-checked:text-secondary-content text-lg text-justify"> 
                    {/* table starts here */}
                    <div  className='w-full rounded-md border-orange-700 border'>

                        {/* table header */}
                        <div className='grid grid-cols-2 rounded-md bg-orange-50 font-semibold'>
                            <p className='p-3 border-r'>
                                Props
                            </p>
                            <p className='p-3'>
                                State
                            </p>
                        </div>

                        {/* differences */}

                        {/* 1 */}
                        <div className='grid grid-cols-2 border-t'>
                            <p className='p-3  border-r'>
                                Props are immutable that is their content cannot be changed once assigned.
                            </p>
                            <p className='p-3'>
                                States are mutable and their value can be changed as per requirement. 
                            </p>
                        </div>

                        {/* 2 */}
                        <div className='grid grid-cols-2 border-t'>
                            <p className='p-3  border-r'>
                                Set by event handlers that is they are completely managed by component itself.
                            </p>
                            <p className='p-3'>
                                Set by parent component. 
                            </p>
                        </div>

                        {/* 3 */}
                        <div className='grid grid-cols-2 border-t'>
                            <p className='p-3  border-r'>
                                Props allows child components to read values from parent components.
                            </p>
                            <p className='p-3'>
                                State is local to a component and cannot be used in other components.
                            </p>
                        </div>
                         
                    </div>
               
                </div>
            </div>

            {/* useEffect */}
            <div className="collapse shadow-lg w-[93%]  md:w-4/5 mx-auto rounded-md mt-5">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title text-2xl font-semibold bg-sky-50 text-primary-content peer-checked:bg-white text-center">
                useEffect
                </div>
                <div className="collapse-content  text-primary-content peer-checked:bg-white peer-checked:text-secondary-content text-lg text-justify"> 
                    <p>The useEffect hook allows us to perform side effects in components. Other than fetching data from API or any other sources there are multiple side effects useEffect can perform. Such as: directly updating the DOM, timers. </p>
                </div>
            </div>  
        </div>
    );
};

export default Blog;