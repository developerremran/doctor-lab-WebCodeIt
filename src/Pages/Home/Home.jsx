
import BannerSection from '../../Components/BannerSection/BannerSection';
import DoctorInfo from '../../Components/DoctorInfo/DoctorInfo';
import GetAppointmentSection from '../../Components/GetAppointmentSection/GetAppointmentSection';
import Hero from '../../Components/Hero/Hero';
import Services from '../../Components/Service/Service';
import SignupForm from '../../Components/SignupForm/SignupForm';

const Home = () => {
    return (
        <div>
            <BannerSection></BannerSection>
            <GetAppointmentSection></GetAppointmentSection>
            <Hero></Hero>
            <Services></Services>
            <DoctorInfo></DoctorInfo>
            <SignupForm></SignupForm>

        </div>
    );
};

export default Home;