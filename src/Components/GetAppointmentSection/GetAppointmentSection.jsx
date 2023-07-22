

const GetAppointmentSection = () => {
    return (
        <div className="lg:-mt-[90px] mt:-mt-0    mt-0 mb-28">
            <div className="MainWidth ">
                <div className="grid h-[150px] bg-white  lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-0 w-full shadow-lg p-10 justify-center items-center lg:mx-16 md:mx-0 mx-0">
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                        </div>
                        <input type="text" id="input-group-1" className="shadow-2xl   bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Your Email" />
                    </div>

                    <div className="relative mb-6 flex gap-5">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <img className="w-8 h-8 p-2 text-gray-500 dark:text-gray-400" src="https://i.ibb.co/nwQ4pyS/location.png" alt="" />
                        </div>
                        <input type="text" id="input-group-1" className="shadow-2xl  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Your Service" />


                        <div className="lg:block md:block   justify-end hidden">
                            <img className="w-[40px]" src="https://i.ibb.co/7tr2BjG/search.png" alt="" />
                        </div>
                    </div>
                    <div className="flex justify-center lg:hidden md:hidden ">
                            <img className="w-[40px]" src="https://i.ibb.co/7tr2BjG/search.png" alt="" />
                        </div>
                </div>
            </div>
        </div>
    );
};

export default GetAppointmentSection;