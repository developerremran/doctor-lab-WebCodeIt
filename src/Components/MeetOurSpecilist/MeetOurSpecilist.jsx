import React from 'react';
import DoctorInfo from '../../API/DoctorInfo';
import DoctorInfoCard from './DoctorInfoCard/DoctorInfoCard';

const MeetOurSpecilist = () => {

   const [doctorData] = DoctorInfo()
   console.log(doctorData);
 
    return (
        <div className='MainWidth'>
        <h2 className='text-[60px] text-center font-bold'>Meet our Specialists</h2>
        <p className='text-center'>Medical to eu nibh vitae est tempor molestie id sed exthe medical dignissim maximus</p>

        <div className='mt-[50px] grid grid-cols-4 gap-10 w-full'  >
        {doctorData?.map((doctorItem, index) => (
          <DoctorInfoCard key={index} doctorItem={doctorItem} />
        ))}
      </div>
      </div>
    );
};

export default MeetOurSpecilist;