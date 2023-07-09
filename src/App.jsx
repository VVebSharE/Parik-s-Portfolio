import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import About from "@/scenes/about";
import Projects from "@/scenes/projects";
import Services from "@/scenes/services";
import Contact from "@/scenes/contact";
import Footer from "@/scenes/footer";
import { useEffect, useState } from "react";
import { ScaleLoader } from 'react-spinners';
import { css, Global } from '@emotion/react';

const override = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const LoadingAnimation = () => (
  <div className="LoadingAnimation" style={{
    display: "flex",
    justifyContent: 'center',
    alignItems:'center',
    height: '100%'
  }} >
    <ScaleLoader size={50} color={'#123abc'} loading={true} />
  </div>
);



const fetchResumeData = () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("uid", "parikSharma@gmail.com");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  return fetch(
    "https://mushy-ruby-firefly.cyclic.app/api/users/data",
    requestOptions
  ).then((res) => res.json());
};


function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setisTopOfPage] = useState(true);
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchResumeData();
        setResumeData(data);
        setLoading(false);
        // Handle the resume data here
      } catch (error) {
        console.error("Error fetching resume data:", error);
        // Handle the error here
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setisTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setisTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Global styles={css`
          body {
            height: 100%;
            width: 100%;
            font-family: "DM Sans", sans-serif;
          }
        `} />
      {loading ? (
        <LoadingAnimation />
      ) :
        resumeData ? (<div>
          <Navbar
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            isTopOfPage={isTopOfPage}
          />
          <Home resumeData={resumeData} setSelectedPage={setSelectedPage} />
          <About resumeData={resumeData} setSelectedPage={setSelectedPage} />
          <Projects resumeData={resumeData} setSelectedPage={setSelectedPage} />
          <Services resumeData={resumeData} setSelectedPage={setSelectedPage} />
          <Contact resumeData={resumeData} setSelectedPage={setSelectedPage} />
          <Footer resumeData={resumeData} />
        </div>) :
          (
            // Handle the case when resumeData is still null after fetching
            <div>No resume data available.</div>)
      }



    </>
  );
}

export default App;
