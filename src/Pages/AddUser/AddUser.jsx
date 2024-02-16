import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserAsync, fetchUsersAsync } from "../../Features/Users/UsersSlice";
import Swal from "sweetalert2";

const AddUser = () => {
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    gender: "",
    phone: "",
    bloodGroup: "",
    birthDate: "",
    address: {
      street: "",
      city: "",
    },
    company: {
      name: "",
      title: "",
      department: "",
      address: {
        street: "",
        city: "",
      },
    },
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.includes("company")) {
      setNewUser((prevUser) => ({
        ...prevUser,
        company: {
          ...prevUser.company,
          [name.replace("company", "")]: value,
          address: {
            ...prevUser.company.address,
          },
        },
      }));
    } else if (name === "address" || name === "city") {
      setNewUser((prevUser) => ({
        ...prevUser,
        address: {
          ...prevUser.address,
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

  const handleAddUser = async (e) => {
    e.preventDefault();

    try {
      console.log(newUser);
      // Re-fetch users after adding a new user
      dispatch(fetchUsersAsync());
      dispatch(addUserAsync(newUser));

      setNewUser({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        gender: "",
        phone: "",
        bloodGroup: "",
        birthDate: "",
        address: {
          street: "",
          city: "",
        },
        company: {
          name: "",
          title: "",
          department: "",
          address: {
            street: "",
            city: "",
          },
        },
        image: "",
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: `New User successfully added to the server `,
        html: `<p style={{fontWeight: "semibold", color: "red"}}>Note:</p>Adding a new user will not add it into the server.
        It will simulate a POST request and will return the new created user with a new id`,
        showConfirmButton: false,
        timer: 5000,
      });
      console.log("User added successfully");
      //reset for after successfully adding a new user
      // Reset form fields without using a ref
    setNewUser({
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      gender: "",
      phone: "",
      bloodGroup: "",
      birthDate: "",
      address: {
        street: "",
        city: "",
      },
      company: {
        name: "",
        title: "",
        department: "",
        address: {
          street: "",
          city: "",
        },
      },
      image: "",
    });
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to add new user to the server",
        showConfirmButton: false,
        timer: 1500,
      });
      console.error("Error adding user:", error);
    }
  };

  return (
    <div className="px-2 md:px-12 lg:px-[100px]">
      <div className="title text-center my-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold gradient-text">
          Add User
        </h2>
      </div>
      <div>
        <div>
          <div className="md:hidden text-center p-4 rounded-lg bg-purple-600/10 backdrop-blur-md drop-shadow-xl mb-2 flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold text-purple-600 pb-1 mb-3 border-b-2 border-purple-600 w-fit px-2">
              Preview
            </h2>
            <img
              src={
                newUser.image
                  ? newUser.image
                  : "https://as2.ftcdn.net/v2/jpg/04/89/93/27/1000_F_489932758_qfhzj92KwhZ5Lr2APhi5FJNbnAkq9BIB.jpg"
              }
              alt={newUser.firstName}
              className="w-40 h-40 rounded-full mx-auto mb-4 border-2 border-purple-600 p-1"
            />
            <div className="mx-auto">
              <p className="text-xl font-bold text-purple-600">{`${
                newUser?.firstName ? newUser?.firstName : "First Name"
              } ${newUser?.lastName ? newUser?.lastName : "Last Name"}`}</p>
              {/* <p className="text-gray-400">{`${
                newUser?.company?.title ? newUser?.company?.title : "Title"
              }`}</p>
              <p className="text-gray-400 font-semibold text-lg">{`Company: ${
                newUser?.company?.name ? newUser?.company?.name : "Company Name"
              }`}</p> */}
            </div>
          </div>
          <form onSubmit={handleAddUser}>
            <div className="flex gap-6 flex-col md:flex-row-reverse">
              <div className="form text-gray-500 rounded-lg bg-purple-600/10 backdrop-blur-md drop-shadow-xl p-6 w-full">
                <h2 className="text-xl font-bold text-purple-600 pb-1 mb-3 border-b-2 border-purple-600 w-fit px-2">
                  User Details
                </h2>
                <div className="my-2">
                  <label className="text-purple-700 font-semiold ">First Name:</label>
                  <input
                    required={true}
                    className="input bg-gray-200 h-8 ml-2 rounded-md w-full"
                    type="text"
                    name="firstName"
                    value={newUser.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-2">
                  <label className="text-purple-700 font-semiold ">Last Name:</label>
                  <input
                    required={true}
                    className="input bg-gray-200 h-8 ml-2 rounded-md w-full"
                    type="text"
                    name="lastName"
                    value={newUser.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-2">
                  <label className="text-purple-700 font-semiold ">Email:</label>
                  <input
                    required={true}
                    className="input bg-gray-200 h-8 ml-2 rounded-md w-full"
                    type="text"
                    name="email"
                    value={newUser.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-2">
                  <label className="text-purple-700 font-semiold ">Avatar URL:</label>
                  <input
                    required={true}
                    className="input bg-gray-200 h-8 ml-2 rounded-md w-full"
                    type="text"
                    name="image"
                    value={newUser.image}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-2">
                  <label className="text-purple-700 font-semiold ">Age:</label>
                  <input
                    required={true}
                    className="input bg-gray-200 h-8 ml-2 rounded-md w-full"
                    type="number"
                    name="age"
                    value={newUser.age}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-2">
                  <label className="text-purple-700 font-semiold ">Gender:</label>
                  <input
                    required={true}
                    className="input bg-gray-200 h-8 ml-2 rounded-md w-full"
                    type="text"
                    name="gender"
                    value={newUser.gender}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-2">
                  <label className="text-purple-700 font-semiold ">Phone:</label>
                  <input
                    required={true}
                    className="input bg-gray-200 h-8 ml-2 rounded-md w-full"
                    type="text"
                    name="phone"
                    value={newUser.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-2">
                  <label className="text-purple-700 font-semiold ">Blood Group:</label>
                  <input
                    required={true}
                    className="input bg-gray-200 h-8 ml-2 rounded-md w-full"
                    type="text"
                    name="bloodGroup"
                    value={newUser.bloodGroup}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-2">
                  <label className="text-purple-700 font-semiold ">Birth Date:</label>
                  <input
                    required={true}
                    className="input bg-gray-200 h-8 ml-2 rounded-md w-full"
                    type="date"
                    name="birthDate"
                    value={newUser.birthDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-2">
                  <label className="text-purple-700 font-semiold ">Address:</label>
                  <input
                    required={true}
                    className="input bg-gray-200 h-8 ml-2 rounded-md w-full"
                    type="text"
                    name="address"
                    placeholder="Street & Suite"
                    value={newUser.address.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-2">
                  <label className="text-purple-700 font-semiold ">City:</label>
                  <input
                    required={true}
                    className="input bg-gray-200 h-8 ml-2 rounded-md w-full"
                    type="text"
                    name="city"
                    placeholder="City"
                    value={newUser.address.city}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form text-gray-500 rounded-lg bg-purple-600/10 backdrop-blur-md drop-shadow-xl p-6 w-full">
                <h2 className="hidden md:block text-xl font-bold text-purple-600 pb-1 mb-3 border-b-2 border-purple-600 w-fit px-2">
                  Preview
                </h2>
                <div className="hidden md:block text-center p-4 rounded-lg bg-white/50 backdrop-blur-md drop-shadow-xl mt-3 mb-12">
                  <img
                    src={
                      newUser.image
                        ? newUser.image
                        : "https://as2.ftcdn.net/v2/jpg/04/89/93/27/1000_F_489932758_qfhzj92KwhZ5Lr2APhi5FJNbnAkq9BIB.jpg"
                    }
                    alt={newUser.firstName}
                    className="w-40 h-40 rounded-full mx-auto mb-4 border-2 border-purple-600 p-1"
                  />
                  <div className="mx-auto">
                    <p className="text-xl font-bold text-purple-600">{`${
                      newUser?.firstName ? newUser?.firstName : "First Name"
                    } ${
                      newUser?.lastName ? newUser?.lastName : "Last Name"
                    }`}</p>
                    {/* <p className="text-gray-400">{`${
                      newUser?.company?.title
                        ? newUser?.company?.title
                        : "Title"
                    }`}</p>
                    <p className="text-gray-400 font-semibold text-lg">{`Company: ${
                      newUser?.company?.name
                        ? newUser?.company?.name
                        : "Company Name"
                    }`}</p> */}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-purple-600 pb-1 mb-3 border-b-2 border-purple-600 w-fit px-2">
                  Company Details
                </h2>
                <div className="my-2">
                  <label className="text-purple-700 font-semiold ">Company Name:</label>
                  <input
                    required={true}
                    className="input bg-gray-200 h-8 ml-2 rounded-md w-full"
                    type="text"
                    name="name"
                    value={newUser.company.companyName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-2">
                  <label className="text-purple-700 font-semiold ">Title:</label>
                  <input
                    required={true}
                    className="input bg-gray-200 h-8 ml-2 rounded-md w-full"
                    type="text"
                    name="title"
                    value={newUser.company.companyTitle}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-2">
                  <label className="text-purple-700 font-semiold ">Department:</label>
                  <input
                    required={true}
                    className="input bg-gray-200 h-8 ml-2 rounded-md w-full"
                    type="text"
                    name="department"
                    value={newUser.company.companyDepartment}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-2">
                  <label className="text-purple-700 font-semiold ">Address:</label>
                  <input
                    required={true}
                    className="input bg-gray-200 h-8 ml-2 rounded-md w-full"
                    type="text"
                    name="companyAddress"
                    placeholder="Street & Suite"
                    value={newUser.company.address.companyAddress}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="my-2">
                  <label className="text-purple-700 font-semiold ">City:</label>
                  <input
                    required={true}
                    className="input bg-gray-200 h-8 ml-2 rounded-md w-full"
                    type="text"
                    name="companyCity"
                    placeholder="City"
                    value={newUser.company.address.companyCity}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center py-6">
              <button
                className="hover:bg-gradient-to-l bg-gradient-to-r from-[#6E026E] from-10% via-[#8A048A] via-30% to-[#EB03EB] to-90% px-4 py-2 text-white font-semibold rounded-lg drop-shadow-xl w-[200px]"
                type="submit"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
