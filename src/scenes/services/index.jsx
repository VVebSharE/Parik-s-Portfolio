import { motion } from "framer-motion";
import HText from "../../shared/HText";
import React from "react";

function Services({ resumeData, setSelectedPage }) {
    const childVariant = {
        hidden: {opacity: 0, scale: 0.9},
        visible: {opacity: 1, scale: 1}
     }
     const container = {
        hidden: {},
        visible: {
          transition: {staggerChildren: 0.2}
        },
      }
  return (
    <section id="services" className="mx-auto min-h-full w-5/6 py-5  mt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage("services")}
      >
        <div className="md:my-5 text-center">
          <HText>Services</HText>
          <p className="md:my-5 text-indigo-500 text-lg">
          Empowering You with Our Professional Services
          </p>
        </div>

        <motion.div className="flex gap-8 flex-wrap justify-evenly mt-4 margin-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true, amount: 0.5}}
        variants={container}
        >
            {resumeData.profile.services.map((ser,index)=>(
                <motion.div className="w-[500px] h-[300px] mt-6 border-2 rounded-md border-gray-100 p-6 hover:bg-gray-100"
                variants={childVariant}>
                    <h1 className="text-xl bg-indigo-500 text-white py-3 px-2">{ser.heading}</h1>
                    <p className="text-base mt-16 text-center">{ser.body}</p>
                </motion.div>
            ))}
        </motion.div>

      </motion.div>
    </section>
  );
}

export default Services;
