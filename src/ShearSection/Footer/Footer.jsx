import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#101A28] mt-10">
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="text-teal-600">
                <Link className="flex items-center gap-3">
                  <img
                    className="h-10 "
                    src="https://i.ibb.co/BLmQ1Jc/Logo.jpg"
                    alt=""
                  />
                  <h2 className="text-3xl font-bold">
                    Medi<span className="text-white font-bold">Lab</span>
                  </h2>
                </Link>
              </div>

              <p className="mt-4 max-w-xs text-gray-500">
                Medical to eu nibh vitae est tempor molestie id sed
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-2">
              <div>
                <p className="font-medium text-lg text-white">Nav Links</p>

                <ul className="mt-6 space-y-4">
                  <li>
                    <Link className="text-white transition hover:opacity-75">Home</Link>
                  </li>

                  <li>
                  <Link className="text-white transition hover:opacity-75">About Us</Link>
                  </li>

                  <li>
                  <Link className="text-white transition hover:opacity-75">Services</Link>
                  </li>

                  <li>
                  <Link className="text-white transition hover:opacity-75">Blog</Link>
                  </li>

                </ul>
              </div>

              <div>
                <p className="font-medium text-lg text-white">Our Company</p>

                <ul className="mt-6 space-y-4">
                  <li>
                    <Link className="text-white transition hover:opacity-75">Contact Us</Link>
                  </li>

                  <li>
                  <Link className="text-white transition hover:opacity-75">Privacy & Policy</Link>
                  </li>

                  <li>
                  <Link className="text-white transition hover:opacity-75">About Our Company</Link>
                  </li>

                </ul>
              </div>

              

            
            </div>
          </div>

          <p className=" text-gray-500">
            &copy; 2022. Company Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;