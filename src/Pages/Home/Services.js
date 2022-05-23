import React from 'react';
import Service from './Service';
import floride from '../../assets/images/fluoride.png';

const Services = () => {
    const services = [
        {
            _id:1,
            name:'Fluoride Treatment',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
        },
        {
            _id:2,
            name:'Cavity Filling',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:'../../assets/images/cavity.png'        
        },
        {
            _id:3,
            name:'Teeth Whitening',
            details: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:'../../assets/images/whitening.png'        
        },
    ]
    return (
        <div className='py-10'> 
            <div className="text-center py-16">
                <h1 className="text-xl text-primary font-bold uppercase">Our Services</h1>
                <h1 className="text-3xl">Services We Provides</h1>
            </div>
            <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2 sm:grid-cols-1">
            {
               services.map(service => <Service
               key={service._id}
               service={service}
               img={floride}
               ></Service>)
            }
            </div>
        </div>
    );
};

export default Services;