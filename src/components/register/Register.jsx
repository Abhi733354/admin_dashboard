import React from "react";

const Register = () => {
    return (
        <div className="min-h-screen w-full bg-white flex items-center justify-center">
            {/* Container */}
            <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-white shadow-xl rounded-1xl overflow-hidden">

                {/* Left Side Image */}
                <div className="hidden md:block">
                    <img
                        src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?fit=crop&w=900&q=80"
                        alt="Login Illustration"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Right Side Login Form */}
                <div className="flex flex-col justify-center px-8 md:px-30 py-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Back 👋</h2>
                    <p className="text-gray-500 mb-8">Sign up to your AdminPro Dashboard</p>

                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email address</label>
                            <input
                                type="email"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-600 focus:border-blue-600"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition border-2 border-transparent hover:bg-white hover:text-blue-600 hover:border-blue-600"
                        >
                            Sign up
                        </button>


                    </form>

                    {/* Sign up link */}
                    <p className="mt-8 text-sm text-gray-500 text-center">
                        Already have an account?{' '}
                        <a href="#" className="text-blue-600 hover:underline font-medium">Sign in</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;

