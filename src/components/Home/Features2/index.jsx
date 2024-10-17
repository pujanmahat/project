// import React from 'react';

const index = () => {
  return (
    <div className="m-4 flex flex-col items-center justify-center p-4 md:m-12">
      <div className="text-center">
        <p className="text-2xl font-bold md:text-3xl">Transform Your Hiring Process</p>
        <p className="text-2xl font-bold md:text-3xl">with Ease</p>
      </div>

      <p className="m-2 text-center text-xs md:text-sm">
        Our applicant tracking system simplifies recruitment, saving you time and effort. <br /> Experience a seamless
        hiring process that connects you with the best talent.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="text-center">
          <img src="/icon7.png" alt="Enhance Collaboration" className="mx-auto" />
          <p className="mt-2 text-xl font-bold md:text-2xl">
            Enhance Collaboration <br /> Among Hiring Teams
          </p>
          <p className="mt-2 text-xs md:text-sm">
            Improve communication and decision- <br />
            making by leveraging shared insights.
          </p>
        </div>

        <div className="text-center">
          <img src="/icon8.png" alt="Gain Insights" className="mx-auto" />
          <p className="mt-2 text-xl font-bold md:text-2xl">
            Gain Valuable Insights <br /> Through Data Analytics
          </p>
          <p className="mt-2 text-xs md:text-sm">
            Leverage data to make more effective <br />
            and informed hiring decisions.
          </p>
        </div>

        <div className="text-center md:mt-3">
          <img src="/icon9.png" alt="Upgrade Experience" className="mx-auto" />
          <p className="mt-2 text-xl font-bold md:text-2xl">
            Upgrade Experience with <br /> a User-Friendly Interface
          </p>
          <p className="mt-2 text-xs md:text-sm">
            Create a positive impression with the <br />
            help of intuitive application processes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
