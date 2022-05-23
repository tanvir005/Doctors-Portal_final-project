import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppoitets from './AvailableAppoitets';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
           <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
           <AvailableAppoitets date={date} setDate={setDate}></AvailableAppoitets>
            <Footer></Footer>
        </div>
        
    );
};

export default Appointment;