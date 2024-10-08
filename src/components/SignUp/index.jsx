import React from 'react'

const index = () => {
  return (
    <div className="grid grid-cols-2 items-center bg-gray-700 text-white w-[1440px] h-[800px]">
      <div className="">
        <p className="mb-4 text-center text-3xl font-bold">
          Redefine your hiring
          <p>approach.</p>
        </p>
        <h5 className="mb-4 text-center">
          Begin your 14-day free trial with unlimited <br /> users today, no credit card needed.*
        </h5>
        <h5 className="mb-4 text-center">
          Rated as the easiest applicant tracking system <br /> to use:
        </h5>
        <div className='grid items-center justify-center'>
          <li>Cuts hiring time in half</li>
          <li>Improves the experience for candidates</li>
          <li>Offers clear and cost-effective pricing</li>
        </div>
        <h5 className="mt-4 text-center">
          Post a job at no cost and discover why over <br /> 10,000 businesses trust CompanyName to <br /> streamline
          their hiring process.
        </h5>
      </div>

      <div className="flex h-screen items-center justify-center  ">
        <div className="w-[700px] rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-3 text-center text-2xl font-bold text-black">Logo</h2>

          <h2 className="mb-6 text-center text-2xl font-bold text-black">
            Start your free trial with no credit <br /> card required.
          </h2>

          <div className="mb-6">
            <input type="text" placeholder="Full Name" className="w-full rounded border p-1 " />
          </div>
          <div className="mb-6">
            <input type="text" placeholder="Company" className="w-full rounded border p-1 " />
          </div>
          <div className="mb-6">
            <input type="text" placeholder="Company email" className="w-full rounded border p-1 " />
          </div>
          <div className="mb-6">
            <input type="number" placeholder="Phone number" className="w-full rounded border p-1 " />
          </div>
          <div className="mb-6">
            <input type="number" placeholder="Number of Employees" className="w-full rounded border p-1 " />
          </div>

          <div className="mb-6">
            <input type="password" placeholder="Password" className="w-full rounded border p-1" />
          </div>

          <div className="mb-4">
            <button className="w-full rounded bg-[#009688] py-3 text-white">Sign up for free</button>
          </div>

          
        </div>
        
      </div>
    </div>
  );
}

export default index
