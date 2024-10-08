import React from 'react'

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="w-full max-w-sm rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-3 text-center text-2xl font-bold">Logo</h2>

        <h2 className="mb-6 text-center text-2xl font-bold">Log in to -----</h2>

        <div className="mb-6">
          <input type="email" placeholder="Email Address" className="w-full rounded border p-3" />
        </div>

        <div className="mb-6">
          <input type="password" placeholder="Password" className="w-full rounded border p-3" />
        </div>

        <div className="mb-4">
          <button className="w-full rounded bg-[#009688] py-3 text-white">Log in</button>
        </div>

        <div className="text-center">
          <a href="#" className="text-sm text-gray-500 hover:text-gray-700">
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
    
  );
}

export default Login
