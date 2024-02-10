
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


const UserCard = ({ user }) => {
  console.log(user);
    const navigate = useNavigate();

    const handleClick = (userId)=>{
      console.log('Clicked on user with ID:', userId);
        navigate(`/userDetails/${userId}`, {replace: true})
    }
    return (
        <div className="bg-white p-2 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500">
      <img src={user.image} alt={user.firstName} className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-blue-500 p-1" />
      <button onClick={()=>handleClick(user?._id)} >
      <h2 className="text-xl font-semibold">{`${user.firstName} ${user.lastName}`}</h2>
      </button>
      <p className="text-gray-600 text-sm">Email: {user.email}</p>
      <p className="text-gray-600 text-sm">Address: {`${user?.address?.address ? user?.address?.address : user?.address?.companyAddress}, ${user?.address?.city ? user?.address?.city : user?.address?.companyCity}`}</p>
      <p className="text-gray-600 text-sm">Company: {user?.company?.name}</p>
    </div>
  );
};

UserCard.propTypes = {
    user: PropTypes.node
};

export default UserCard;
