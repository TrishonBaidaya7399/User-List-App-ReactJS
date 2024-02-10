import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../../Components/Shared/Navbar/UserCard';
import { fetchUsersAsync } from '../../Features/Users/UsersSlice';
import { RiUserAddFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { MdOutlineSort } from "react-icons/md";
import { IoSearchCircleOutline } from "react-icons/io5";


const Home = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.users);
  const isLoading = useSelector((state) => state.usersReducer.isLoading);

  const [sortOption, setSortOption] = useState('name'); // Default sort option
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  const sortedUsers = [...users]; 


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
      <div className="md:hidden">
      <div className="mb-4 flex justify-between items-center my-6">
        <div className='flex justify-center items-center'>
          <label htmlFor="sortOption " className="mr-2">
          <MdOutlineSort className='text-3xl text-blue-600' onClick={()=>setOpen(!open)}/>
          </label>
          {
            open &&
            <>
            <select
            id="sortOption"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="select select-bordered w-fit h-7 m-0 md:w-auto border-blue-400 text-blue-600"
            >
            <option value="name">Filter by Name</option>
            <option value="email">Filter by Email</option>
            <option value="company">Filter by Company</option>
          </select>
            </>
          }
          {/* <FaSortDown className='text-blue-600 -ml-10'/> */}
        </div>
        {!open &&
        <div className='flex justify-center items-center gap-2'>
       
          <input
            type="text"
            id="searchQuery"
            value={searchQuery}
            placeholder='Search by Name'
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input input-bordered w-full h-7 m-0 md:w-auto border-blue-400 text-blue-600"
            />
          <label htmlFor="searchQuery" className="">
          <IoSearchCircleOutline className="text-2xl text-blue-600 -ml-10"/>
          </label>
        </div>
          }
           <div>
            <Link to="/addUser">
          <button className='text-2xl md:text-3xl text-blue-500 rounded-full border-2 border-blue-600 p-1 text-center font-semibold'><RiUserAddFill /></button>
            </Link>
        </div>
      </div>
      </div>
      <div className="hidden md:block">
      <div className="mb-4 flex justify-between items-center my-6">
        <div className='flex justify-center items-center'>
          <label htmlFor="sortOption " className="mr-2">
          <MdOutlineSort className='text-3xl text-blue-600'/>
          </label>
         
            <select
            id="sortOption"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="select select-bordered w-fit h-7 m-0 md:w-auto border-blue-400 text-blue-600"
            >
            <option value="name">Filter by Name</option>
            <option value="email">Filter by Email</option>
            <option value="company">Filter by Company</option>
          </select>

        </div>
        
        <div className='flex justify-center items-center gap-2'>
       
          <input
            type="text"
            id="searchQuery"
            value={searchQuery}
            placeholder='Search by Name'
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input input-bordered w-full h-7 m-0 md:w-auto border-blue-400 text-blue-600"
            />
          <label htmlFor="searchQuery" className="">
          <IoSearchCircleOutline className="text-2xl text-blue-600 -ml-10"/>
          </label>
        </div>
          
           <div>
            <Link to="/addUser">
          <button className='text-2xl text-blue-500 rounded-full border-2 border-blue-600 p-1 text-center font-semibold'><RiUserAddFill /></button>
            </Link>
        </div>
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
