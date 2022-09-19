import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  
  const linkMap = links.map(link => {
    return <a href={"#" + link} key={link}>{link}</a>
  })
  
  return <nav>{linkMap}</nav>;
}

export default NavBar;
