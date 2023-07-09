import { motion } from "framer-motion";
import HText from "../../shared/HText";
import React from "react";

function About({ resumeData, setSelectedPage }) {
  return (
    <section id="about" className="mx-auto min-h-full w-5/6 py-5  mt-24">
      <motion.div onViewportEnter={() => setSelectedPage("about")}>
        {/* Header */}
        <div className="md:my-5 text-center">
          <HText>About me</HText>
          <p className="md:my-5 text-indigo-500 text-lg">
            Education & experience
          </p>
        </div>
        <motion.div className="flex m-auto flex-wrap justify-evenly" 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        >

            <div className="flex-col">
              {resumeData.profile.education.map((edu, index) => (
                <div className="p-4 m-4 border-2 rounded-md border-gray-100 hover:bg-gray-100 w-[500px] h-[300px]">
                  <div className="text-base">
                    <h1 className="font-bold m-3 text-lg"> {edu.degree} </h1>
                    <p className="text-gray-600">{edu.university}</p>
                    <div className="m-1 p-1 bg-indigo-500 rounded-full text-white text-sm w-20 mx-auto">
                      {edu.year}
                    </div>

                    <p className="text-base text-center mt-16">{edu.about}</p>
                  </div>
                </div>
              ))}
            </div>
            
          <div className="flex-col">
            {resumeData.profile.experience.map((exp, index) => (
              <div className="p-4 m-4 border-2 rounded-md border-gray-100 hover:bg-gray-100 w-[500px] h-[300px]">
                <div className="text-base">
                  <h1 className="font-bold m-3 text-lg"> {exp.role} </h1>
                  <p lassName="text-gray-600">{exp.where}</p>
                  <div className="m-1 py-1 bg-indigo-500 rounded-full text-white text-sm w-24 mx-auto">
                    {exp.startDate.substr(0, 4)}-{exp.endDate.substr(0, 4)}
                  </div>

                  <p className="mt-16">{exp.about}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
