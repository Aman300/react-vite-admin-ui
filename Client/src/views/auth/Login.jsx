import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';
import { loginRoute } from '../../utils/APIRoutes';

const validate = values => {
  const errors = {};

 
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  if (!values.otp) {
    errors.otp = 'Required';
  } else if (values.otp.length < 6) {
    errors.otp = 'Phone no must be 6 digit';
  }

  return errors;
};
function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      otp:'',
    },
    validate,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        alert(values.email)
        // Send a request to the server to authenticate the user
        const response = await axios.post(loginRoute, {
          email: values.email,
          otp: values.otp,
        });

        if(response.status){
           // Assuming the server responds with a token upon successful login
        const token = response.data.token;

        // Store the token in localStorage
        localStorage.setItem('token', token);

        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(values));

        // Display success message
        toast.success(response.data.message);

        // Redirect the user to the homepage
        navigate('/');
        }else{
           // Display success message
        toast.error(response.data.message);
        }
      } catch (error) {
        // Handle any errors
        console.error('Login failed:', error);
        toast.error('Login failed. Please try again.');
      } finally {
        // Reset the form's submitting state
        setSubmitting(false);
      }
    },
  });

  return (
    <>
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
            <div className="lg:w-1/2 xl:w-6/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
                <img className=' size-10' src="https://kd124.com/Images/LandingPage_img/Header_profile.jpg" alt="" />
                <h1 className="text-2xl xl:text-3xl font-extrabold">Login</h1>
                <div className="w-full flex-1 mt-8">
                <div className="mx-auto max-w-xs">
                <form onSubmit={formik.handleSubmit}>
                      {/*  */}

                        <input id="email" name='email' onChange={formik.handleChange}
                        className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${formik.errors.email ? "border-red-500" : "border-gray-300"} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5`}
                        type="email"
                        placeholder="Enter your email id"
                        />
                        {/* {formik.errors.userPassword && <div className="text-red-500 ">{formik.errors.userPassword}</div>} */}

                     
                       

                        <input id="otp" name='otp' onChange={formik.handleChange}
                        className={`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border ${formik.errors.otp ? "border-red-500" : "border-gray-300"} placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5`}
                        type="number"
                        placeholder="Enter 6 digit OTP"
                        />

                        {/* {formik.errors.otp && <div className="text-red-500 ">{formik.errors.otp}</div>} */}

                     
                   
                
                    <button  type='submit' className="mt-5 tracking-wide font-semibold bg-indigo-800 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                    </svg>
                    <span className="ml-3">Login</span>
                    </button>
                </form>
                </div>
                
                </div>
            </div>
            
            </div>
        </div>
    </div>
    </>
  )
}

export default Login