// import PropTypes from 'prop-types';

import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Footer from "../../Components/Shared/Footer/Footer";

const Main = () => {
    const divStyle = {
        backgroundImage: 'url("https://i.ibb.co/LJ0NJ56/abstract-white-bokeh-glowing-lights-background-1017-24049.jpg")',  
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    };
    return (
        <div style={divStyle} className="min-h-[100vh] overflow-hidden ">
            <Navbar/>
            <div className="">
            <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    );
};

Main.propTypes = {
    
};

export default Main;