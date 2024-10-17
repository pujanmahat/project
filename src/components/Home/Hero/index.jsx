// import React from 'react';

const index = () => {
  return (
    <div className="m-12 flex flex-col items-center justify-between p-4 md:flex-row">
      <div className="text-center md:text-left">
        <p className="mb-4 text-3xl font-bold text-[#1F3B73] md:text-4xl">
          Streamline with our <br /> advanced Applicant Tracking <br /> System.
        </p>
        <p className="mb-4 text-xs md:text-sm">
          Transform your recruitment strategy and find the best <br /> talent effortlessly with our user-friendly
          platform.
        </p>
        <button className="rounded-md bg-[#009688] p-2 font-semibold text-white">Get Started for free</button>
      </div>

      <img src="/first.png" alt="hero image" className="mb-8 w-full md:mb-0 md:w-[400px] lg:w-[500px]" />
    </div>
  );
};

export default index;
