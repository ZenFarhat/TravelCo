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
        <a href='#'>
          <FacebookIcon fontSize='large' />
        </a>
        <a href='#'>
          <InstagramIcon fontSize='large' />
        </a>
        <a href='#'>
          {" "}
          <TwitterIcon fontSize='large' />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
