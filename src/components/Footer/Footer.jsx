import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

function Footer() {
  return (
    <footer>
      <div className='footer__logo'>Travel Co.</div>
      <div className='footer__icons'>
        <FacebookIcon fontSize='large' />
        <InstagramIcon fontSize='large' />
        <TwitterIcon fontSize='large' />
      </div>
    </footer>
  );
}

export default Footer;
