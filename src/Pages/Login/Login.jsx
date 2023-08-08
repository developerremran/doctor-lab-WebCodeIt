
import { useForm } from 'react-hook-form';
import './loginStyle.css'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {

    const navigate=useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    
    }
    return (
        <div className='MainWidth'>
            <div className='grid grid-cols-2  '>
                <div>
                    <section className="bg-white dark:bg-gray-900 ">
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div style={{ boxShadow: ' 1px 3px 80px 0px rgba(0, 0, 0, 0.22)' }} className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-[45px] font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Welcome 👋
                                    </h1>
                                    <p>Please fill up the forms to continue</p>

                                    {/* google login  */}

                                    <button className='w-full flex justify-center items-center text-xl bg-white border rounded-md text-black gap-5'>
                                        <img className='w-[30px]' src="https://i.ibb.co/r6c9NDr/1738775.png" alt="" />
                                        Google Sign In
                                    </button>



                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6" action="#">
                                        <div>

                                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your Email" required
                                                {...register("email")}
                                            />
                                        </div>
                                        <div>

                                            <input type="password" name="password" id="password" placeholder="your password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                {...register("password")}
                                                required />
                                        </div>

                                        <div>
                                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                                        </div>
                                        <button className='w-full'>Login</button>

                                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                        <p className="text-md font-light text-gray-500 dark:text-gray-400">
                                            Already have an account? <a href="#" className="font-medium text-blue-600 hover:underline dark:text-primary-500">Sign up</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className='flex items-center'>
                    <img className='   max-h-[80%] max-w-full' src="https://i.ibb.co/Pt3J9zz/BG.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;