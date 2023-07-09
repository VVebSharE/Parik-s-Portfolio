import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.svg";
import Link from "./Link";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

function Navbar({isTopOfPage,selectedPage,setSelectedPage}) {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState(false); 
  const isAboveMediumScreens= useMediaQuery("(min-width:1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-gray-200 drop-shadow";

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left Side */}

            <img src={Logo} alt="logo" />
            {/* Right Side */}
            {isAboveMediumScreens?(<div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-xl`}>
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Services"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                
                <Link
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
              <div className={`${flexBetween} gap-8`}>
              <ActionButton setSelectedPage={setSelectedPage}>Hire me</ActionButton>
              </div>
            </div>)
            : (
              <div>
              <button className="rounded-full bg-indigo-500 p-2"
              onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                  <Bars3Icon className="h-6 w-6 text-white"/>

              </button>
          </div>
            )}
          </div>
        </div>
      </div>

      {/* MObile Menu Modal */}
    
    {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-gray-200 drop-shadow-xl">
            {/* Close Icon*/}
            <div className="flex justify-end p-12">
                <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="h-6 w-6 text-black"/>
                </button>
            </div>

            {/* Menu Items*/}
            <div className="m-auto flex flex-col gap-10 text-xl text-black ">
            <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="About"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
               <Link
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Services"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                
                 
                <Link
                  page="Contact"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
            </div>
        </div>
    )}

    </nav>
  );
}

export default Navbar;
