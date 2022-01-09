import React from "react";

function Footer() {
  var nCurrentYear = new Date().getFullYear();

  return <footer>
    <p>Copyright ⓒ {nCurrentYear}</p>
  </footer>
}

export default Footer;