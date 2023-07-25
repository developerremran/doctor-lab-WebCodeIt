import './AppointmentSectionFOrm.css'

const AppointmentSectionForm = () => {
  return (
    <div className="MainWidth">
      <h2 className='text-5xl text-center mt-20 font-semibold py-8'>Apply for an appointment</h2>

      <div className="grid grid-cols-2 gap-[30px] items-center  justify-center py-20">
        <div>
          <div>
            <form>




              <div className='flex gap-5 mb-4'>


                <input type="email" id="email" aria-describedby="helper-text-explanation" className="w-[30%] inputStyleName" placeholder="Enter Your name" />
                <input type="email" id="email" aria-describedby="helper-text-explanation" className="w-[30%] inputStyleName" placeholder="Enter Your Number" />
                <input type="email" id="email" aria-describedby="helper-text-explanation" className="w-[30%] inputStyleName" placeholder="Enter Your Age" />


              </div>

              <div className="relative my-5">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input type="text" id="email-address-icon" className="doctorInputSearch" placeholder="Search for Doctors or Conditions" />
              </div>
              <div className="relative my-5">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    width="24"
                    height="24"
                    className="w-6 h-6 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 15l4.5 4.5M8 15a7 7 0 1 1 0-14 7 7 0 0 1 0 14z"
                    />
                  </svg>
                </div>
                <input type="text" id="email-address-icon" className="emailInput" placeholder="Enter Your email" />
              </div>

              <input type="email" id="email" aria-describedby="helper-text-explanation" className="w-[30%] my-5 inputStyleName" placeholder="Hospital Name" />
              <input type="email" id="email" aria-describedby="helper-text-explanation" className="w-[30%] my-5 inputStyleName" placeholder="Enter Your Service" />

              <button type="submit" className="submitBtnSt">Apply Now</button>
            </form>
          </div>
        </div>
        <div className='flex justify-end'>
          <img src="https://i.ibb.co/K6W3wG0/image-11.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppointmentSectionForm;