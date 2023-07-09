
import React from "react";

function Footer({ resumeData }) {
  return (
    <div className="py-10 mt-9 bg-[#090E34]">
      <div className="mb-4">
        <h1 className="text-white text-3xl m-auto pb-2 ">Let's Talk!</h1>
        <p className="text-gray-400 text-xl">Contact Info</p>
        <p className="text-gray-400">
          Address: {resumeData.profile.contact.address.city}{" "}
          {resumeData.profile.contact.address.state}{" "}
          {resumeData.profile.contact.address.country}
        </p>
        <p className="text-gray-400">
          Phone: {resumeData.profile.contact.phone}
        </p>
        <p className="text-gray-400 border-b-2 w-96 m-auto pb-5">
          Email: {resumeData.profile.contact.email}
        </p>
      </div>

     
    </div>
  );
}

export default Footer;
