import React from 'react'
import { motion } from "framer-motion";
import HText from "../../shared/HText";

function Contact({ resumeData, setSelectedPage }) {
  return (
    <section id="contact" className="mx-auto min-h-full w-5/6 py-5 mt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage("contact")}
      >
        <div className="md:my-5 text-center">
          <HText>Contact With Me</HText>
          <p className="md:my-5 text-indigo-500 text-lg">
          Have an Project in Mind?
          </p>
        </div>

        <div className='flex flex-col items-center m-7'>
            <div className='flex gap-20 mb-6 '>
                <div>
                    <input className='outline-none p-4 border-b-2 focus:border-indigo-500 bg-gray-100 px-20' type="text" placeholder='Enter your name'/>
                </div>
                <div>
                    <input className='outline-none p-4 border-b-2 focus:border-indigo-500 bg-gray-100 px-20' type="text" placeholder='Company (Optional)'/>
                </div>
            </div>

            <div className='flex gap-20 mb-6'>
                <div>
                    <input className='outline-none p-4 border-b-2 focus:border-indigo-500 bg-gray-100 px-20' type="text" placeholder='Enter your Email'/>
                </div>
                <div>
                    <input className='outline-none p-4 border-b-2 focus:border-indigo-500 bg-gray-100 px-20' type="text" placeholder="Phone number"/>
                </div>
            </div>

            <div>
                <textarea className='outline-none p-4 px-20 bg-gray-100 border-b-2 focus:border-indigo-500' name="" id="" cols="68" rows="5" placeholder='Tell me about your project'></textarea>
            </div>
        </div>
        <motion.div 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.5 }}
         transition={{ delay: 0.2, duration: 0.5 }}
         variants={{
           hidden: { opacity: 0, x: -50 },
           visible: { opacity: 1, x: 0 },
         }}>
             <button className='bg-indigo-500 p-3 px-5 rounded-full text-white'>
            Contact Me
        </button>
        </motion.div>
       
        </motion.div>
        </section>
  )
}

export default Contact