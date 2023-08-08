
import { useEffect } from 'react';
import AppointmentSectionForm from '../../Components/AppointmentSectionForm/AppointmentSectionForm';
import BannerSection from '../../Components/BannerSection/BannerSection';
import DoctorInfo from '../../Components/DoctorInfo/DoctorInfo';
import GetAppointmentSection from '../../Components/GetAppointmentSection/GetAppointmentSection';
import Hero from '../../Components/Hero/Hero';
import MeetOurSpecilist from '../../Components/MeetOurSpecilist/MeetOurSpecilist';
import NewsletterSection from '../../Components/NewsletterSection/NewsletterSection';
import Services from '../../Components/Service/Service';
import Aos from 'aos';
 
// all set home page layout and here is all section import if your need any think you caN Build component folder and here import to add and you can remove any section here just remove then remove homepage 

const Home = () => {
    useEffect(() => {
        Aos.init();
      }, []);

    return (
        <div>
            <BannerSection></BannerSection>
            <GetAppointmentSection></GetAppointmentSection>
            <Hero ></Hero>
            <Services></Services>
            <DoctorInfo></DoctorInfo>
            <MeetOurSpecilist></MeetOurSpecilist>
            <AppointmentSectionForm></AppointmentSectionForm>
            <NewsletterSection></NewsletterSection>
        </div>
    );
};

export default Home;