
import PropTypes from 'prop-types';


const UserCard = ({ user }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md" data-aos="fade-up" data-aos-delay="50" data-aos-duration="500">
      <img src={user.image} alt={user.firstName} className="w-16 h-16 rounded-full mx-auto mb-4" />
      <h2 className="text-xl font-semibold">{`${user.firstName} ${user.lastName}`}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-600">{`${user.address.street}, ${user.address.suite}, ${user.address.city}`}</p>
      <p className="text-gray-600">{user.company.name}</p>
    </div>
  );
};

UserCard.propTypes = {
    user: PropTypes.node
};

export default UserCard;
