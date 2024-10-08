import React from 'react';

const index = () => {
  return (
    <div className="mx-4 flex flex-col items-center justify-between px-4 md:mx-12 md:flex-row md:items-start">
      
      <div className="mb-8 flex-1 text-center md:mb-0 md:text-left">
        <p className="mb-3 text-3xl font-bold text-[#1F3B73] md:text-4xl">
          Revolutionize Your <br /> Hiring Process Today
        </p>
        <p className="mb-4 text-xs md:text-sm">
          Our applicant tracking system simplifies recruitment, making it <br />
          easier to find the right talent. Experience a seamless hiring <br />
          journey with powerful tools at your fingertips.
        </p>
        <img src="/second.png" alt="Image" className="mx-auto w-full max-w-[300px] md:mx-0 md:max-w-none" />
      </div>

      
      <div className="grid flex-1 grid-cols-1 gap-4 text-center sm:grid-cols-2">
        <div>
          <img src="/icon1.png" alt="Icon 1" className="mx-auto mb-2" />
          <p className="font-bold">Automated Workflows</p>
          <p className="text-xs md:text-sm">
            Automate tasks and streamline <br />
            communication for a more <br />
            effective hiring process.
          </p>
        </div>
        <div>
          <img src="/icon2.png" alt="Icon 2" className="mx-auto mb-2" />
          <p className="font-bold">Candidate Database</p>
          <p className="text-xs md:text-sm">
            Maintain a centralized database <br />
            of all candidates and also enable <br />
            quick search.
          </p>
        </div>
        <div>
          <img src="/icon3.png" alt="Icon 3" className="mx-auto mb-2" />
          <p className="font-bold">
            Customizable Career <br />
            Pages
          </p>
          <p className="text-xs md:text-sm">
            Create branded, customizable <br />
            career pages that reflect the <br />
            company's culture.
          </p>
        </div>
        <div>
          <img src="/icon4.png" alt="Icon 4" className="mx-auto mb-2" />
          <p className="font-bold">Resume Parsing</p>
          <p className="text-xs md:text-sm">
            Automatically parse and <br />
            extract relevant information <br />
            from resumes and CVs.
          </p>
        </div>
        <div>
          <img src="/icon5.png" alt="Icon 5" className="mx-auto mb-2" />
          <p className="font-bold">Interview Scheduling</p>
          <p className="text-xs md:text-sm">
            Simplify interview scheduling <br />
            with integrated calendar tools <br />
            and automated reminders.
          </p>
        </div>
        <div>
          <img src="/icon6.png" alt="Icon 6" className="mx-auto mb-2" />
          <p className="font-bold">Compliance and Data Security</p>
          <p className="text-xs md:text-sm">
            Ensure compliance with <br />
            regulations by securely storing <br />
            candidate data.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
