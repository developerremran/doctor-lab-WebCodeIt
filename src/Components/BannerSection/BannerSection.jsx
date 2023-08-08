import './banersection.css'

const BannerSection = () => {
    return (
        <div className=' '>
            <div id='home' className='max-w-full  max-h-screen bg-[#E7F1FF]  '>
                <div className="MainWidth  grid grid-cols-2  items-center lg:pt-0 md:pt-0 pt-40">
                    <div>
                        <div className='lg:space-y-10 space-y-5'>
                            <h2>We are Provide</h2>
                            <h2 className="lg:text-6xl text-5xl w-[500px] font-bold textLine">The Best Medical Service Solution</h2>

                            <p className='lg:w-[500px] w-full'>
                                Medical to eu nibh vitae est tempor molestie id sed exthe medical dignissim maximus ipsum metus ipsum.
                            </p>

                            <button className="hover:bg-black transition duration-700">Get Started With us</button>

                            {/* here is 2 box option  */}
                            <div className='flex gap-5 mt-10 lg:justify-normal text-center '>
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
                    {/* right side image  */}
                    <div className=''>
                        <div className='lg:flex lg:justify-end lg:items-end  hidden'>
                            <img src="https://i.ibb.co/cDT14rP/Doctor-Image.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default BannerSection;