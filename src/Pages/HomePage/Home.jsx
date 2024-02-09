// Home.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import UserCard from '../../Components/Shared/Navbar/UserCard';
import { fetchUsersAsync } from '../../Features/Users/UsersSlice';

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.users);
  const isLoading = useSelector((state) => state.usersReducer.isLoading);

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  return (
    <div  className="mx-h-[100vh]">
      <h1 className="text-3xl font-semibold mb-4">User List</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
