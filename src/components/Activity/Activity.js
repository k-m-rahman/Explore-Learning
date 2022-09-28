import React from 'react';

const Activity = ({activity}) => {
    const {name,picture} = activity ;
    return (
        
        <div className="card w-100 bg-base-100 shadow-xl">
            <figure><img src={picture} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
                 </div>
            </div>
        </div>
    );
};

export default Activity;