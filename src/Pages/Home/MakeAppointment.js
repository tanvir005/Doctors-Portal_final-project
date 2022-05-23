import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className="flex justify-center items-center my-10 w-full">
            <div className="hidden lg:block">
                <img className="mt-[-200px]" src={doctor} alt="doctor" />
            </div>
            <div className="lg:w-1/2 p-5">
                <h3 className="text-xl text-primary">Appointment</h3>
                <h2 className="text-3xl text-white">Make an Appointment</h2>
                <p className="text-white py-5">lorem io lkaskld jals;jfj oij aihfiau asdhjiasud asd iojaopifdioa  asjfoiasfdj
                    aspoifoasdujfiasd asoihjfijsadhjfiasd asoidhfkasf9i8ouj asidfhj9aweutjraskjhdf asoipjjkashd
                    sA FOIASDJHFPIJ
                    aosidfiosfdja aosidjl;sjfpioasd oasujfosdhjfihaeuif a sdkjfiauhfihaewrf </p>
                <PrimaryButton>
                    get staeted
                </PrimaryButton>
            </div>


        </section>
    );
};

export default MakeAppointment;