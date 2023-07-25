
import AppointmentSectionForm from '../../Components/AppointmentSectionForm/AppointmentSectionForm';
import BannerSection from '../../Components/BannerSection/BannerSection';
import DoctorInfo from '../../Components/DoctorInfo/DoctorInfo';
import GetAppointmentSection from '../../Components/GetAppointmentSection/GetAppointmentSection';
import Hero from '../../Components/Hero/Hero';
import MeetOurSpecilist from '../../Components/MeetOurSpecilist/MeetOurSpecilist';
import NewsletterSection from '../../Components/NewsletterSection/NewsletterSection';
import Services from '../../Components/Service/Service';
 
const Home = () => {
    return (
        <div>
            <BannerSection></BannerSection>
            <GetAppointmentSection></GetAppointmentSection>
            <Hero></Hero>
            <Services></Services>
            <DoctorInfo></DoctorInfo>
            <MeetOurSpecilist></MeetOurSpecilist>
            <AppointmentSectionForm></AppointmentSectionForm>
            <NewsletterSection></NewsletterSection>

        </div>
    );
};

export default Home;