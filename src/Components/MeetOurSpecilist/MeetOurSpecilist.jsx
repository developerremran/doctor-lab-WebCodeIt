import React from 'react';
import DoctorInfo from '../../API/DoctorInfo';
import DoctorInfoCard from './DoctorInfoCard/DoctorInfoCard';

const MeetOurSpecilist = () => {

  //  const [doctorData] = DoctorInfo()
  const [doctorsInfo, refetch]=DoctorInfo()
  
   console.log(doctorsInfo);
 
    return (
      <div className='MainWidth'>
      <h2 className='text-[60px] text-center font-bold'>Meet our Specialists</h2>
      <p className='text-center'>Medical to eu nibh vitae est tempor molestie id sed exthe medical dignissim maximus</p>

      <div className='mt-[50px] grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-10 justify-center items-center w-full'  >
      {doctorsInfo?.map((doctorItem, index) => (
        <DoctorInfoCard key={index} doctorItem={doctorItem} />
      ))}
    </div>
    </div>

    );
};

export default MeetOurSpecilist;