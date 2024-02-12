import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "../../Components/Shared/Navbar/UserCard";
import { fetchUsersAsync } from "../../Features/Users/UsersSlice";
import { RiUserAddFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdOutlineSort } from "react-icons/md";
import { IoSearchCircleOutline } from "react-icons/io5";
import Banner from "../../Components/Banner";

const Home = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersReducer.users);
  const isLoading = useSelector((state) => state.usersReducer.isLoading);

  const [sortOption, setSortOption] = useState("name");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Fetch users only when the component mounts
    if (users.length === 0) {
      dispatch(fetchUsersAsync());
    }
  }, [dispatch, users]);

  const sortedUsers = [...users];

  sortedUsers.sort((a, b) => {
    switch (sortOption) {
      case "name":
        return `${a.firstName} ${a.lastName}`.localeCompare(
          `${b.firstName} ${b.lastName}`
        );
      case "email":
        return a.email.localeCompare(b.email);
      case "company":
        return a.company?.name.localeCompare(b.company.name);
      default:
        return 0;
    }
  });

  // Filter users based on the search query
  const filteredUsers = sortedUsers.filter((user) =>
    `${user.firstName} ${user.lastName} ${user.email} ${user.company.name}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );
  console.log(filteredUsers.length);
  const displayedUsers = showAll ? filteredUsers : filteredUsers.slice(0, 8);

  return (
    <div className="mx-h-[100vh] px-2 md:px-12 lg:px-[100px]">
      <Banner users={users} />
      <div className="md:hidden">
        <div className="mb-4 flex justify-between items-center my-6">
          <div className="flex justify-center items-center">
            <label htmlFor="sortOption " className="mr-2">
              <MdOutlineSort
                className="text-3xl text-blue-600"
                onClick={() => setOpen(!open)}
              />
            </label>
            {open && (
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
            )}
            {/* <FaSortDown className='text-blue-600 -ml-10'/> */}
          </div>
          {!open && (
            <div className="flex justify-center items-center gap-2">
              <input
                type="text"
                id="searchQuery"
                value={searchQuery}
                placeholder="Search by Name"
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input input-bordered w-full h-7 m-0 md:w-auto border-blue-400 text-blue-600"
              />
              <label htmlFor="searchQuery" className="">
                <IoSearchCircleOutline className="text-2xl text-blue-600 -ml-10" />
              </label>
            </div>
          )}
          <div>
            <Link to="/addUser">
              <button className="text-2xl md:text-3xl text-blue-500 rounded-full border-2 border-blue-600 p-1 text-center font-semibold">
                <RiUserAddFill />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-4 gradient-text text-center">
          ~ List of Users ~
        </h1>
      </div>
      <div className="hidden md:block">
        <div className="mb-4 flex justify-between items-center my-6">
          <div className="flex justify-center items-center">
            <label htmlFor="sortOption " className="mr-2">
              <MdOutlineSort className="text-3xl text-blue-600" />
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

          <div className="flex justify-center items-center gap-2">
            <input
              type="text"
              id="searchQuery"
              value={searchQuery}
              placeholder="Search by Name"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input input-bordered w-full h-7 m-0 md:w-auto border-blue-400 text-blue-600"
            />
            <label htmlFor="searchQuery" className="">
              <IoSearchCircleOutline className="text-2xl text-blue-600 -ml-10" />
            </label>
          </div>

          <div>
            <Link to="/addUser">
              <button className="text-2xl text-blue-500 rounded-full border-2 border-blue-600 p-1 text-center font-semibold">
                <RiUserAddFill />
              </button>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayedUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
          <div className="mt-4">
            {filteredUsers.length > 8 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="bg-gradient-to-r from-[#03045e] from-10% via-[#0077b6] via-30% to-[#0096c7] to-90% px-4 py-2 text-white font-semibold rounded-lg drop-shadow-xl w-[200px] cursor-pointer"
              >
                {showAll ? "See Less" : "See All"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
