import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-10 bg-base-200 text-base-content">
        <aside>
          <p>
            <span className="text-3xl font-semibold">Travel-Mate</span>
            </p>
          <aside>
            <p>Copyright © 2024 - All right reserved by Travel-Mate</p>
          </aside>
        </aside>
        <nav>
          <h6 className="footer-title">Contact Info</h6>
          <p>
            <span className="font-medium">Phone:</span> +8801757433007
          </p>
          <p>
            <span className="font-medium">Email:</span> mkiuzzal007@gmail.com
          </p>
          <p>
            <span className="font-medium">Street:</span> Ghulshan-1,Euro Tower
          </p>
          <p>
            <span className="font-medium">Location:</span> Dhaka,Bangladesh
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link to='/About'  className="link link-hover">About us</Link>
          <Link to='/My_List' className="link link-hover">My List</Link>
          <Link to='/All_Tourists_Spot' className="link link-hover">All Tourist Sport</Link>
          <Link to='/Add_Tourist_Sport' className="link link-hover">Add Tourist Sport</Link>
        </nav>
        <nav className="flex flex-col items-center">
          <h6 className="footer-title">Social Link</h6>
          <p className="link link-hover">
            <Link to='https://facebook.com' target="blank">
            <FaFacebook className="text-2xl"  />
            </Link>
          </p>
          <p className="link link-hover">
            <Link to='https://instagram.com' target="blank">
            <FaInstagram className="text-2xl" />
            </Link>
          </p>
          <p className="link link-hover">
            <Link to='https://twitter.com' target="blank">
            <TiSocialTwitter className="text-3xl" />
            </Link>
          </p>
          <p className="link link-hover">
            <Link to='https://linkedin.com' target="blank">
            <TiSocialLinkedin className="text-3xl" />
            </Link>
          </p>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
