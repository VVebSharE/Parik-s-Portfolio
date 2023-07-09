import AnchorLink from "react-anchor-link-smooth-scroll"


function Link({page, selectedPage,setSelectedPage}) {
    const lowerCasePage=page.toLowerCase().replace(/ /g, "");
  return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? "text-indigo-500" : ""} transition duration-200 hover:text-indigo-600` } href={`#${lowerCasePage}`} onClick={()=> setSelectedPage(lowerCasePage)}>
        {page}
    </AnchorLink>
  )
}

export default Link