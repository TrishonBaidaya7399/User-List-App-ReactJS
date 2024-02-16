// import PropTypes from 'prop-types';

import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
<footer className="footer items-center p-4 bg-purple-600/10 backdrop-blur-md drop-shadow-xl text-neutral-content px-4 md:px-12 lg:px-[100px]">
  <aside className="items-center flex text-sm text-purple-600">
  <img src="https://i.ibb.co/mG3HjpQ/7153150.png" alt="usersInfo" className="w-8 h-8" />
    <p>Copyright © 2024 - All right reserved by UsersInfo</p>
  </aside> 
  <nav className="flex gap-4 justify-center mx-auto md:mx-0 md:ml-auto">
  <a href="#" className="text-xl text-purple-400 hover:text-blue-800 duration-300"><FaFacebookF/></a>
      <a href="#" className="text-xl text-purple-400 hover:text-blue-600 duration-300"><FaTwitter/></a>
      <a href="#" className="text-xl text-purple-400 hover:text-red-600 duration-300"><FaYoutube/></a>
  </nav>
</footer>
        </div>
    );
};

Footer.propTypes = {
    
};

export default Footer;