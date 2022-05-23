import React from 'react';

const PatientsReview = ({review}) => {
    return (
        <div className="card bg-base-100 shadow-xl p-5">
            <div className="card-body">
                <p>{review.review}</p>
            </div>
            <div className="flex gap-5 justify-center items-center">
                <figure className="px-10 pt-10">
                    <img src={review.img} alt="Shoes" className="rounded-full border-4 border-primary p-1" />
                </figure>
                <div>
                    <h2 className="card-title">{review.name}</h2>
                    <p>{review.address}</p></div>
            </div>
        </div>
    );
};

export default PatientsReview;