import React from 'react';

const Blog = () => {
    return (
        <div className='my-14 mx-4 lg:w-3/4 lg:mx-auto text-center bg-indigo-200 shadow-xl py-3 pb-10 rounded-xl'>

            <h1 className='text-4xl font-[600] m-12'>Blogs</h1>

            {/* How does react work ? */}
            <div className="collapse shadow-lg w-4/5 mx-auto rounded-md ">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title text-2xl font-semibold bg-sky-50 text-primary-content peer-checked:bg-white text-center">
                    How does react work ?
                </div>
                <div className="collapse-content  text-primary-content peer-checked:bg-white peer-checked:text-secondary-content text-lg text-left"> 
                    <p className='p-6'>ReactJS is one of the most popular JavaScript libraries for mobile and web application development created by Facebook.React contains a collection of reusable JavaScript code snippets used for user interface (UI) building called components.One of the biggest advantages of using React is that we can infuse HTML code with JavaScript which is known as JSX. Users can create a representation of a DOM node by declaring the Element function in React.When updates are made React compares the current DOM to the virtual DOM and only updates the differences between the two using diff algorithm.This process is called reconciliation. </p>
                </div>
            </div>

            {/* Props vs State */}
            <div className="collapse shadow-lg w-4/5 mx-auto rounded-md mt-5">
                <input type="checkbox" className="peer" /> 
                <div className="collapse-title text-2xl font-semibold bg-sky-50 text-primary-content peer-checked:bg-white text-center">
                Props vs State
                </div>
                <div className="collapse-content  text-primary-content peer-checked:bg-white peer-checked:text-secondary-content text-lg text-justify"> 
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            {/* <!-- head --> */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <!-- row 1 --> */}
                                <tr>
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                </tr>
                                {/* <!-- row 2 --> */}
                                <tr>
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Purple</td>
                                </tr>
                                {/* <!-- row 3 --> */}
                                <tr>
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Red</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
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