
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';



// Here is data load in doctor if you need json file go to Public > Doctor.json 

const useCart = () => {
  const [loading, setLoading] = useState(false);
  const { refetch, data: doctorsInfo = [] } = useQuery({
    queryKey: ['doctorInfo'],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch('/public/Doctor.json');
      const data = await res.json();
      console.log(data);
      return data;
    },
  });

 
  return [doctorsInfo, refetch];
};

export default useCart;