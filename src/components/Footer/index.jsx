import React from 'react';

const Footer = () => {
  return (
    <div className="grid list-none grid-cols-1 items-center gap-4 bg-[#1F3B73] p-4 text-white md:grid-cols-2 lg:grid-cols-4">
     
      <div className="text-center lg:text-left">
        <p>Logo</p>
      </div>

      
      <div className="space-y-2 text-center lg:text-left">
        <li className="font-bold">Quick Links</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Support</li>
      </div>

      <div className="space-y-2 text-center lg:text-left">
        <li className="font-bold">Follow Us</li>
        <li>Facebook</li>
        <li>Twitter</li>
        <li>Instagram</li>
      </div>

      
      <div className="space-y-2 text-center lg:text-left">
        <li className="font-bold">Contact Us</li>
        <li>Parsying-5, Pokhara</li>
        <li>company@gmail.com</li>
        <li>9829141935</li>
      </div>

    
      <div className="col-span-1 mt-4 md:col-span-2 lg:col-span-4">
        <p className="w-full border"></p>
        <p className="mt-2 text-center">© 2024 Resume. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
