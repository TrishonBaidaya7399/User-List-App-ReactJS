import PropTypes from 'prop-types';
// import CardSlide from './CardSlide/CardSlide';



const Banner = ({users}) => {
    console.log(users);
  return (
    <div className=" ">
      <div className=" py-12 md:py-[60px]">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="slider-part md:w-2/5 relative " data-aos="fade-left">
            {/* <CardSlide displayedUsers = {displayedUsers}/> */}
            <img src="https://i.ibb.co/109dVvN/4346013-removebg-preview.png" className='w-full' alt="" />
          </div>
          <div className="md:w-3/5 flex flex-col mt-4 md:mt-0">
            <h1 className="text-2xl text-purple-800 md:text-3xl lg:text-5xl font-bold flex flex-col">
              <p>Discover & Collect</p>
              <p>Users Details</p>
            </h1>
            <p className="py-3 md:py-6 text-purple-500 font-semibold">
            Welcome to our Users List App – your gateway to a seamless and efficient user management experience! We are thrilled to have you on board as we embark on this journey of streamlined interactions and enhanced user engagement
            </p>
          <div className="stats flex flex-row gap-6 p-4 w-fit bg-white/60 text-purple-800 backdrop-blur-md drop-shadow-xl">
            <div className="flex flex-col">
                <h1 className="text-2xl md:text-4xl font-bold text-purple-800">{users.length}</h1>
                <p className="text-sm md:text-xl font-semibold text-purple-600">Users</p>
            </div>
            <div className="flex flex-col">
                <h1 className="text-2xl md:text-4xl font-bold text-purple-800">12K+</h1>
                <p className="text-sm md:text-xl font-semibold text-purple-600">Registers</p>
            </div>
            <div className="flex flex-col">
                <h1 className="text-2xl md:text-4xl font-bold text-purple-800">15K+</h1>
                <p className="text-sm md:text-xl font-semibold text-purple-600">Traffic</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
    users: PropTypes.object
};
export default Banner;
