
import './newslettersection.css'

const NewsletterSection = () => {
    return (
        <div className='bg-[#2271E7] text-white rounded-lg '>
            <div className='md:p-20 '>
                <h2 className='text-[45px] font-semibold mx-auto leading-[60px] text-center md:w-[700px]'>Subscribe Our Newsletters To Get the Best Medicine Advice</h2>
                <form >
                    <div className='flex justify-center py-5'>
                    <div className="relative my-5 md:w-[30%]">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                        </div>
                        <input type="text" id="email-address-icon" className="w-[500px] doctorInputSearch" placeholder="Search for Doctors or Conditions" />
                    </div>

                    <button type="submit" className="submitBtnSt    m-5">Apply Now</button>

                    </div>
                   
                </form>
            </div>
        </div>
    );
};

export default NewsletterSection;