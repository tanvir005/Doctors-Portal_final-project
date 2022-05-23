import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner';
import ConnectForm from './ConnectForm';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import SecondInfo from './SecondInfo';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
    <div className='lg:px-12 md:px-5 sm:px-5 px-5'>
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <SecondInfo></SecondInfo>
        <MakeAppointment></MakeAppointment>
        <Testimonial></Testimonial>
        <ConnectForm></ConnectForm>
        <Footer></Footer>
    </div>
    );
};

export default Home;