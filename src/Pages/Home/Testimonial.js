import React from 'react';

import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import PatientsReview from './PatientsReview';

import nokta from '../../assets/icons/quote.svg'

const Testimonial = () => {
    const patientsReviews = [
        {
            _id: 1,
            name: "Winson Herry",
            address: "California",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people1
        },
        {
            _id: 2,
            name: "Winson Herry",
            address: "California",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people2
        },
        {
            _id: 3,
            name: "Winson Herry",
            address: "California",
            review: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img: people3
        }
    ]
    return (
        <section className="py-10">
            <div  className="flex justify-between">
               
                <div>
                    <h4 className="font-bold text-primary text-xl">Tetimonial</h4>
                    <h2 className="text-3xl">What Our Patients Says</h2>
                </div>

                <img src={nokta} className="w-48" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    patientsReviews.map(review => <PatientsReview
                        key={review._id}
                        review={review}
                    ></PatientsReview>)
                }

            </div>
        </section>
    );
};

export default Testimonial;