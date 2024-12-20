import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

const RightSideNav = () => {
  return (
    <div className=" p-4 space-y-3">
      <h2 className="text-xl font-bold text-primary">Login With</h2>
      <div>
        <button className="btn btn-outline w-full mb-3">
        <FaGoogle className="text-blue-500" />
          Login With Google
        </button>
        <button className="btn btn-outline w-full">
        <FaGithub className="text-blue-500" />
          Login With Github
        </button>
      </div>
      <h2 className="text-xl font-bold text-primary">Find Us On</h2>
      <div>
       <button className=" btn btn-outline btn-accent w-full"><a className="flex items-center gap-4" href=""><FaFacebook/>Facebook</a></button>
       <button className=" btn btn-outline btn-accent w-full"><a className="flex items-center gap-4" href=""><FaInstagram/>Instagram</a></button>
       <button className=" btn btn-outline btn-accent w-full"><a className="flex items-center gap-4" href=""><FaTwitter/>Twitter</a></button>
        
      </div>
    </div>
  );
};

export default RightSideNav;
