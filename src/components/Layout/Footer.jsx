import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    <p><span className="text-3xl font-semibold">Travel-Mate</span><br/>Providing reliable tech since 2020</p>
    <aside>
    <p>Copyright © 2024 - All right reserved by Travel-Mate</p>
  </aside>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">All Tourist Sport</a>
    <a className="link link-hover">Add Tourist Sport</a>
  </nav> 
  <nav className="flex flex-col items-center">
    <h6 className="footer-title">Social Link</h6> 
    <p className="link link-hover"><FaFacebook  className="text-2xl" /></p>
    <p className="link link-hover"><FaInstagram  className="text-2xl"/></p>
    <p className="link link-hover"><TiSocialTwitter  className="text-3xl"/></p>
    <p className="link link-hover"><TiSocialLinkedin  className="text-3xl"/></p>
  </nav>
</footer>
        </div>
    );
};

export default Footer;