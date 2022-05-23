import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import bg from '../../assets/images/appointment.png'

const ConnectForm = () => {
    return (
        <section className="py-10 w-full" style={{ background: `url(${bg})` }}>
            <div className="text-center py-10"> 
                <h4 className="text-primary text-xl font-bold"> Contact Us</h4>
                <h4 className="text-white text-3xl"> Stay Connected With Us</h4></div>
            <form>
                <div className="flex flex-col gap-4 align-middle items-center py-10">
                    <input className="border-2 rounded-md p-2 w-1/2" type="email" placeholder="Enter your Email" />
                    <input className="border-2 rounded-md p-2 w-1/2" type="text" placeholder="Subject" />
                    <textarea className="textarea textarea-bordered w-1/2" placeholder="Your query"></textarea>
                    <input className="btn btn-primary  uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-1/4" type="submit" value="Submit" />
                </div>
            </form>
        </section>
    );
};

export default ConnectForm;