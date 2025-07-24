import React, { useState } from 'react';
import { User, Lock } from 'lucide-react';

function Login({ loginHandel }) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
 

  const submitHandler =  (e) => {
    e.preventDefault();
   

       loginHandel(email, password);
      setemail("");
      setpassword("");
    
  };

  return (
    <div className="min-h-screen flex" style={{ backgroundColor: '#1c1c1c' }}>
      
      <div className="flex-1 flex items-center justify-center px-8 lg:px-12">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">LOGIN</h1>
            <p className="text-gray-400">Enter your account details</p>
          </div>

          <form onSubmit={submitHandler} className="space-y-6">
        
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <User className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#1c1c1c] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  placeholder="Enter Your Email Here"
                />
              </div>
            </div>

      
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#1c1c1c] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  placeholder="Enter Password Here"
                />
              </div>
            </div>

    
            <button
              type="submit"
            
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
            >
             LOGIN
            </button>
          </form>
        </div>
      </div>

      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 items-center justify-center p-12">
        <div className="text-center max-w-lg">
          <h2 className="text-4xl font-bold text-white mb-4">
            Welcome to<br />
            <span className="text-gray-200">FlowDesks</span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Manage your tasks and stay productive
          </p>

          <div className="relative">
            <div className="w-64 h-64 mx-auto bg-white bg-opacity-10 rounded-full flex items-center justify-center">
              <div className="w-32 h-40 bg-white rounded-lg shadow-lg flex flex-col p-4">
                <div className="w-full h-2 bg-gray-300 rounded mb-2"></div>
                <div className="w-3/4 h-2 bg-gray-300 rounded mb-2"></div>
                <div className="w-full h-2 bg-gray-300 rounded mb-4"></div>

                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-gray-600 rounded mr-2"></div>
                  <div className="w-16 h-2 bg-gray-800 rounded"></div>
                </div>
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 bg-gray-300 rounded mr-2"></div>
                  <div className="w-12 h-2 bg-gray-400 rounded"></div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-600 rounded mr-2"></div>
                  <div className="w-14 h-2 bg-gray-800 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
