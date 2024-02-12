// import PropTypes from 'prop-types';

import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
<footer className="footer items-center p-4 bg-base-100 bg-opacity-60 text-neutral-content px-4 md:px-12 lg:px-[200px]">
  <aside className="items-center flex text-xs md:text-xl text-blue-500">
  <img src="https://i.ibb.co/Z2Y6FxM/830a8274e9d37f5530538d9357ebf3d8-removebg-preview.png" alt="usersInfo" className="w-8 md:w-12 h-8 md:h-12" />
    <p>Copyright © 2024 - All right reserved by UsersInfo</p>
  </aside> 
  <nav className="flex gap-4 justify-center mx-auto md:mx-0 md:ml-auto">
  <a href="#" className="text-2xl text-blue-400 hover:text-blue-800 duration-300"><FaFacebookF/></a>
      <a href="#" className="text-2xl text-blue-400 hover:text-blue-600 duration-300"><FaTwitter/></a>
      <a href="#" className="text-2xl text-blue-400 hover:text-red-600 duration-300"><FaYoutube/></a>
  </nav>
</footer>
        </div>
    );
};

Footer.propTypes = {
    
};

export default Footer;