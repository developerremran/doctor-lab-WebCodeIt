import { useEffect, useState } from "react";

 

const DoctorInfo = () => {
    const [doctorData, setDoctorData] = useState([])
    
       useEffect(()=>{
        fetch('/public/Doctor.json')
        .then(res => res.json())
        .then(data => {
            setDoctorData(data)
        })
       },[])



    return [doctorData]
};

export default DoctorInfo;