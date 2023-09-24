import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const SignUpStepOnePage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleNextClick = (data) => {
        navigate(`/signup-step-2`, { state: { data: data } });
      };

    const style = {
        backgroundImage: `url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')`
    };

    return (
        <div>
           <section className="bg-white ">
    <div className="flex justify-center min-h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/5" style={style}>
        </div>

        <div className="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
                <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize ">
                    Get your account now.
                </h1>

                <p className="mt-4 text-gray-500 ">
                    Let’s get you all set up so you can verify your personal account and begin setting up your profile.
                </p>

                <div>
                    <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2" >
                        <div>
                            <label className="block mb-2 text-sm text-gray-600 ">Email address</label>
                            <input value={email} onChange={(e) => {setEmail(e.target.value)}} type="email" placeholder="johnsnow@example.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-600 ">Password</label>
                            <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label className="block mb-2 text-sm text-gray-600 ">Confirm password</label>
                            <input type="password" placeholder="Enter your password" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <button onClick={() => handleNextClick({ email: email, password: password})}
                        className="mt-6 flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-primary rounded-lg hover:bg-secondray focus:outline-none focus:ring focus:ring-primary focus:ring-opacity-50">
                        <span>Next </span>

                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rtl:-scale-x-100" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
        </div>
    );
}
export default SignUpStepOnePage;