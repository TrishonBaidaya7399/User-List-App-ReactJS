
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const UserCard = ({ user }) => {
  // console.log(user);
    const navigate = useNavigate();

    const handleClick = (userId)=>{
      console.log('Clicked on user with ID:', userId);
        navigate(`/userDetails/${userId}`, {replace: true})
    }
    return (
        <div className="bg-purple-600/10 backdrop-blur-md p-2 rounded-lg shadow-md " data-aos="fade-up" data-aos-delay="50" data-aos-duration="500">
      <img src={user.image} alt={user.firstName} className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-purple-600 p-1" />
      <button onClick={()=>handleClick(user?.id)} >
      <h2 className="text-xl font-semibold">{`${user.firstName} ${user.lastName}`}</h2>
      </button>
      <p className="text-gray-600 text-sm"> {user.email}</p>
      <p className="text-gray-600 text-sm"><span className='text-purple-600 font-semibold'>Company:</span> {user?.company?.name}</p>
      <p className="text-gray-600 text-sm"><span className='text-purple-600 font-semibold'>Address:</span> {`${user?.address?.address ? user?.address?.address : user?.address?.companyAddress}, ${user?.address?.city ? user?.address?.city : user?.address?.companyCity}`}</p>
    </div>
  );
};

UserCard.propTypes = {
    user: PropTypes.node
};

export default UserCard;
