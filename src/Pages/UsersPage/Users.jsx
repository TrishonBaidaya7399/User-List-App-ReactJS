// Home.jsx
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../../Components/Shared/Navbar/UserCard';
import { fetchUsersAsync } from '../../Features/Users/UsersSlice';

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.users);
  const isLoading = useSelector((state) => state.usersReducer.isLoading);

  const [sortOption, setSortOption] = useState('name'); // Default sort option
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  const sortedUsers = [...users]; // Create a copy of the users array for sorting

  // Sort users based on the selected option
  sortedUsers.sort((a, b) => {
    switch (sortOption) {
      case 'name':
        return `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`);
      case 'email':
        return a.email.localeCompare(b.email);
      case 'company':
        return a.company.name.localeCompare(b.company.name);
      default:
        return 0;
    }
  });

  // Filter users based on the search query
  const filteredUsers = sortedUsers.filter((user) =>
    `${user.firstName} ${user.lastName} ${user.email} ${user.company.name}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mx-h-[100vh]">
      <div className="mb-4 flex justify-between items-center my-6">
        <div>
          <label htmlFor="sortOption" className="mr-2">
            Sort by:
          </label>
          <select
            id="sortOption"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="select select-bordered w-24 h-7 m-0 md:h-10 md:w-auto border-blue-400 text-blue-600"
          >
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="company">Company</option>
          </select>
        </div>
        <div>
          <label htmlFor="searchQuery" className="mr-2">
            Search:
          </label>
          <input
            type="text"
            id="searchQuery"
            value={searchQuery}
            placeholder='Search by Name'
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input input-bordered w-24 h-7 m-0 md:h-10 md:w-auto border-blue-400 text-blue-600"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-[20%]">
          <span className="loading loading-spinner text-accent w-12 h-12"></span>
        </div>
      ) : (
        <div className="pb-6 mx-auto text-center">
          <h1 className="text-3xl font-semibold mb-4 gradient-text text-center">~ List of Users ~</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
