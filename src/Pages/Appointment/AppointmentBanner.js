import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bannerimg from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';


const AppointmentBanner = ({date, setDate}) => {
   
    return (
        <section className="hero min-h-screen">
            <img src={bg} alt=''/>
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 justify-evenly">
                <img className="md:w-1/2" src={bannerimg} alt=""/>
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;