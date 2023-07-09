import { motion } from "framer-motion";
import HText from "../../shared/HText";
import { useState, useEffect } from "react";

function Projects({ resumeData, setSelectedPage }) {
  const [showFullText, setShowFullText] = useState(false);
  // const [selectedOption, setSelectedOption] = useState("");
  // const [filteredData, setFilteredData] = useState([]);

 

  // function handleOptionSelect(event) {
  //   const selectedOption = event.target.value;
  //   setSelectedOption(selectedOption);
  // }

  function handleLearnMoreClick() {
    setShowFullText(true);
  }
  // const modelData = [resumeData.projects.map((prj, index) => (
  //     prj.data.other.category
  // ))]
  // console.log(modelData)

  // useEffect(() => {
  //   // Filter the model data based on the selected option
  //   const filteredModelData = modelData.filter(
  //     (item) => item.option === selectedOption
  //   );

  //   // Update the filteredData state with the filtered model data
  //   setFilteredData(filteredModelData);
  // }, [selectedOption]);
  // console.log(filteredData)
  const container = {
    hidden: {},
    visible: {
      transition: {staggerChildren: 0.2}
    },
  }
  const childVariant = {
     hidden: {opacity: 0, scale: 0.9},
     visible: {opacity: 1, scale: 1}
  }
  return (
    <section id="projects" className="mx-auto min-h-full w-5/6 py-5  mt-24">
      <motion.div onViewportEnter={() => setSelectedPage("projects")}>
        {/* Header */}
        <div className="md:my-5 text-center">
          <HText>Projects</HText>
          <p className="md:my-5 text-gray-600 text-lg">
            Search projects by title or filter by category
          </p>
        </div>

        {/* Searching Container */}
        <div className="flex justify-between my-7">
          {/* Input Box */}
          <div className="flex gap-2">
            <span class="hidden sm:block  p-2.5 bg-gray-100 shadow-sm rounded-xl cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </span>
            <input
              class="pl-3 pr-1 sm:px-4 py-2 border-gray-200 border-2 focus:border-2 focus:border-indigo-600 outline-none rounded-lg text-sm sm:text-md "
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Projects"
              aria-label="Name"
            ></input>
          </div>
          {/* Selection box */}

          <div>
            <select
              // onChange={handleOptionSelect}
              name="projects"
              id="projects"
              class="px-4 py-2 border-2 border-gray-200 focus:border-indigo-600 outline-none rounded-lg text-sm sm:text-md"
            >
              <option class="text-sm sm:text-md" value="">
                All Projects
              </option>

              {resumeData.projects.map((prj, index) => (
                <option class="sm:text-md" value={prj.data.other.category}>
                  {prj.data.other.category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Projects Modals */}
        {/* {filteredData.map((item) => (
          // Render each item in the filtered data as a model component */}
          <motion.div className="md:flex items-center justify-between gap-8 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, amount: 0.5}}
          variants={container}
          >
            {resumeData.projects.map((prj, index) => (
              <motion.div className="mx-auto w-[400px] h-[400px] mt-5 rounded-md border-2 border-gray-100 px-5 py-6 text-center hover:bg-gray-100"
              variants={childVariant}>
                <h1 className="mb-4 text-xl bg-indigo-500 p-3 text-white">
                  {prj.name}
                </h1>
                <div className="mb-[100px]">
                  <div
                    className={`overflow-hidden ${
                      showFullText ? "max-h-full" : "max-h-24"
                    }`}
                  >
                    {prj.data.summary}
                  </div>
                  {!showFullText && (
                    <button
                      className="text-blue-500 mt-2"
                      onClick={handleLearnMoreClick}
                    >
                      Learn More
                    </button>
                  )}
                </div>
                <div className="flex justify-between">
                  <div className="px-5 py-3 bg-indigo-500 text-white rounded-lg">
                    <a href={prj.data.source_code}>
                   <button>
                    Source Code
                   </button>
                    </a>
                  </div>
                  <div className="px-5 py-3 bg-indigo-500 text-white rounded-lg">
                    <a href={prj.data.live_demo}>
                      <button>
                      Live Demo
                    </button>
                    </a>
                    
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        {/* ))} */}
      </motion.div>
    </section>
  );
}

export default Projects;
