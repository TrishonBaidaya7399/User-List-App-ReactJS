import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUserAsync } from '../../Features/Users/UsersSlice';

const AddUser = () => {
    const dispatch = useDispatch();
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: {
      address: "",
      city: "",
    },
    company: {
      name: '',
    },
    image: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    if (name === 'address' || name === 'city') {
      setNewUser((prevUser) => ({
        ...prevUser,
        address: {
          ...prevUser.address,
          [name]: value,
        },
      }));
    } else if (name === 'name') {
      setNewUser((prevUser) => ({
        ...prevUser,
        company: {
          ...prevUser.company,
          [name]: value,
        },
      }));
    } else {
      setNewUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };
  

  const handleAddUser = async () => {
    try {
        dispatch(addUserAsync(newUser));
        setNewUser({
            firstName: '',
            lastName: '',
            email: '',
            address: {
              address: "",
              city: "",
            },
            company: {
              name: '',
            },
            image: '',
          });
      
          console.log('User added successfully');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div>
      <h1>Add User</h1>
      <form>
        <label>
          First Name:
          <input type="text" name="firstName" value={newUser.firstName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" name="lastName" value={newUser.lastName} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" name="email" value={newUser.email} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" placeholder="Street & Suite" value={newUser.address.address} onChange={handleInputChange} />
          
          <input type="text" name="city" placeholder="City" value={newUser.address.city} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Company Name:
          <input type="text" name="name" value={newUser.company.name} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Avatar URL:
          <input type="text" name="image" value={newUser.image} onChange={handleInputChange} />
        </label>
        <br />
        <button type="button" onClick={handleAddUser}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
