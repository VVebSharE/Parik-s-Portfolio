import React from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";
import Developer from "@/assets/developer.svg";
import { motion } from "framer-motion";
<script type="text/javascript" src="../../data/user_data.js"></script>

function Home({ resumeData,setSelectedPage }) {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  console.log(resumeData)
  return (
    <section id="home" className="gap-16 py-10 md:h-full md:pb-0">
      {/* Image and Main Header */}
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage("home")}
      >
        {/* Main Header */}
        <div className="md:basis-3/5 mt-32 z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="text-indigo-600 text-xl py-4">Hey There 👋 I am</p>
            <h1 className="text-5xl pb-4">{resumeData.name}</h1>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Download CV
            </ActionButton>
          </motion.div>
        </div>
        {/* Image */}
        <div>
          <img
            src={Developer}
            alt="home picture"
            className="h-[700px] w-[900px]"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
