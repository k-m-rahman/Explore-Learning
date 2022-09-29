import React from 'react';

const Blog = () => {
    return (
        <div className='m-14 w-3/4 mx-auto text-center bg-indigo-200 shadow-xl py-3 pb-10 rounded-xl'>

            <h1 className='text-4xl font-[600] m-12'>Blogs</h1>

            {/* How does react work ? */}
            <div className="collapse shadow-lg w-4/5 mx-auto rounded-md ">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title text-2xl font-semibold bg-sky-50 text-primary-content peer-checked:bg-white text-center">
                    How does react work ?
                </div>
                <div className="collapse-content  text-primary-content peer-checked:bg-white peer-checked:text-secondary-content text-lg text-justify"> 
                    <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
                </div>
            </div>

            {/* Props vs State */}
            <div className="collapse shadow-lg w-4/5 mx-auto rounded-md mt-5">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title text-2xl font-semibold bg-sky-50 text-primary-content peer-checked:bg-white text-center">
                Props vs State
                </div>
                <div className="collapse-content  text-primary-content peer-checked:bg-white peer-checked:text-secondary-content text-lg text-justify"> 
                    <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
                </div>
            </div>

            {/* useEffect */}
            <div className="collapse shadow-lg w-4/5 mx-auto rounded-md mt-5">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title text-2xl font-semibold bg-sky-50 text-primary-content peer-checked:bg-white text-center">
                useEffect
                </div>
                <div className="collapse-content  text-primary-content peer-checked:bg-white peer-checked:text-secondary-content text-lg text-justify"> 
                    <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
                </div>
            </div>

          

            
        </div>
    );
};

export default Blog;