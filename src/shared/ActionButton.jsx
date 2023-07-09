import AnchorLink from "react-anchor-link-smooth-scroll"


const ActionButton = ({children,setSelectedPage}) => {
  return (
    <AnchorLink className="rounded-md bg-indigo-500 px-6 py-2 text-xl text-white hover:bg-indigo-600 hover:text-white"
    onClick={()=> setSelectedPage("home")}
    href="#home">
        {children}
        </AnchorLink>
  )
}

export default ActionButton