import './banersection.css'

const BannerSection = () => {
    return (
        <div className=' '>
          <div className='max-w-full  max-h-screen bg-[#E7F1FF]  '>
                <div className="MainWidth  grid grid-cols-2  items-center">
                    <div>
                        <div className='space-y-10'>
                            <h2>We are Provide</h2>
                            <h2 className="text-6xl w-[500px] font-bold textLine">The Best Medical Service Solution</h2>

                            <p className='lg:w-[500px] md:w-[500px] w-full'>
                                Medical to eu nibh vitae est tempor molestie id sed exthe medical dignissim maximus ipsum metus ipsum.
                            </p>

                            <button className="hover:bg-black transition duration-700">Get Started With us</button>


                            <div className='flex gap-5 mt-10'>
                                <div className="stats shadow-lg border p-4">
                                    <div className="stat">
                                        <div className="stat-value text-4xl font-bold">10M+</div>
                                        <div className="stat-desc text-sm text-gray-500">Patients</div>
                                    </div>
                                </div>
                                <div className="stats shadow-lg border p-4">
                                    <div className="stat">
                                        <div className="stat-value text-4xl font-bold">112K+</div>
                                        <div className="stat-desc text-sm text-gray-500">World-Class Doctors</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div  className=''>
                            <div className='flex justify-end items-end'>
                            <img src="https://i.ibb.co/cDT14rP/Doctor-Image.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

           
      
        </div>
    );
};

export default BannerSection;