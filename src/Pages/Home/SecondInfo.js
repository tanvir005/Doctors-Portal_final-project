import React from 'react';
import bodyImg from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';
const SecondInfo = () => {
    return (
        <div className="hero min-h-screen py-10 ">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <div className="md:w-1/2">
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the
                     readable content of a page when looking at its layout. The point of using Lorem Ipsumis
                      that it has a more-or-less normal distribution of letters,as opposed to using 'Content here,
                       content here',
                     making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get started</PrimaryButton>
                </div>
                <img className="rounded-xl md:w-1/2" src={bodyImg} />
            </div>
        </div>
    );
};

export default SecondInfo;