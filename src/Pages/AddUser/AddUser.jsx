import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserAsync } from "../../Features/Users/UsersSlice";
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
    domain: "",
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
    if (
      name === "name" ||
      name === "title" ||
      name === "companyAddress" ||
      name === "companyCity" ||
      name === "title" ||
      name === "department"
    ) {
      setNewUser((prevUser) => ({
        ...prevUser,
        company: {
          ...prevUser.company,
          [name.replace("company", "")]: value,
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

  const handleAddUser = async () => {
    try {
      console.log(newUser);
      dispatch(addUserAsync(newUser));
      setNewUser({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        gender: "",
        phone: "",
        domain: "",
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
        position: "top-end",
        icon: "success",
        title: "New User successfully added to the server",
        showConfirmButton: false,
        timer: 1500
      });
      console.log("User added successfully");
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to add new user to the server",
        showConfirmButton: false,
        timer: 1500
      });
      console.error("Error adding user:", error);
    }
  };

  return (
    <div>
      <div className="title text-center my-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold gradient-text">
          Add User
        </h2>
      </div>
      <div>
        <form>
          <div className="flex gap-6 flex-col md:flex-row">
            <div className="form border-2 rounded-lg bg-white drop-shadow-xl p-6 w-full">
              <h2 className="text-xl font-bold text-blue-500 pb-1 mb-3 border-b-2 border-blue-500 w-fit px-2">
                User Details
              </h2>
              <div className="my-2 flex gap-2">
                <label>
                  First Name:
                  <input
                    className="input bg-gray-200 h-8 ml-2 rounded-md"
                    type="text"
                    name="firstName"
                    value={newUser.firstName}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <label>
                Last Name:
                <input
                  className="input bg-gray-200 h-8 ml-2 rounded-md"
                  type="text"
                  name="lastName"
                  value={newUser.lastName}
                  onChange={handleInputChange}
                />
              </label>

              <div className="my-2"></div>

              <div className="my-2">
                <label>
                  Email:
                  <input
                    className="input bg-gray-200 h-8 ml-2 rounded-md"
                    type="text"
                    name="email"
                    value={newUser.email}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className="my-2">
                <label>
                  Avatar URL:
                  <input
                    className="input bg-gray-200 h-8 ml-2 rounded-md"
                    type="text"
                    name="image"
                    value={newUser.image}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className="my-2">
                <label>
                  Age:
                  <input
                    className="input bg-gray-200 h-8 ml-2 rounded-md"
                    type="number"
                    name="age"
                    value={newUser.age}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="my-2">
                <label>
                  Gender:
                  <input
                    className="input bg-gray-200 h-8 ml-2 rounded-md"
                    type="text"
                    name="gender"
                    value={newUser.gender}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="my-2">
                <label>
                  Phone:
                  <input
                    className="input bg-gray-200 h-8 ml-2 rounded-md"
                    type="text"
                    name="phone"
                    value={newUser.phone}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="my-2">
                <label>
                  Domain:
                  <input
                    className="input bg-gray-200 h-8 ml-2 rounded-md"
                    type="text"
                    name="domain"
                    value={newUser.domain}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="my-2">
                <label>
                  Blood Group:
                  <input
                    className="input bg-gray-200 h-8 ml-2 rounded-md"
                    type="text"
                    name="bloodGroup"
                    value={newUser.bloodGroup}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="my-2">
                <label>
                  Birth Date:
                  <input
                    className="input bg-gray-200 h-8 ml-2 rounded-md"
                    type="date"
                    name="birthDate"
                    value={newUser.birthDate}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="my-2">
                <label>
                  Address:
                  <input
                    className="input bg-gray-200 h-8 ml-2 rounded-md"
                    type="text"
                    name="address"
                    placeholder="Street & Suite"
                    value={newUser.address.address}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="my-2">
                <label>
                  City:
                  <input
                    className="input bg-gray-200 h-8 ml-2 rounded-md"
                    type="text"
                    name="city"
                    placeholder="City"
                    value={newUser.address.city}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            </div>
            <div className="form border-2 rounded-lg bg-white drop-shadow-xl p-6 w-full">
              <h2 className="text-xl font-bold text-blue-500 pb-1 mb-3 border-b-2 border-blue-500 w-fit px-2">
                Company Details
              </h2>
              <div className="my-2">
                <label>
                  Company Name:
                  <input
                    className="input bg-gray-200 h-8 ml-2 rounded-md"
                    type="text"
                    name="name"
                    value={newUser.company.name}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="my-2">
                <label>
                  Title:
                  <input
                    className="input bg-gray-200 h-8 ml-2 rounded-md"
                    type="text"
                    name="title"
                    value={newUser.company.title}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="my-2">
                <label>
                  Department:
                  <input
                    className="input bg-gray-200 h-8 ml-2 rounded-md"
                    type="text"
                    name="department"
                    value={newUser.company.department}
                    onChange={handleInputChange}
                  />
                </label>
              </div>

              <div className="my-2">
                <label>
                  Address:
                  <input
                    className="input bg-gray-200 h-8 ml-2 rounded-md"
                    type="text"
                    name="companyAddress"
                    placeholder="Street & Suite"
                    value={newUser.company.address.address}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
              <div className="my-2">
                <label>
                  City:
                  <input
                    className="input bg-gray-200 h-8 ml-2 rounded-md"
                    type="text"
                    name="companyCity"
                    placeholder="City"
                    value={newUser.company.address.companyCity}
                    onChange={handleInputChange}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-6">
            <button
              className="bg-gradient-to-r from-[#03045e] from-10% via-[#0077b6] via-30% to-[#0096c7] to-90% px-4 py-2 text-white font-semibold rounded-lg drop-shadow-xl w-[200px]"
              type="button"
              onClick={handleAddUser}
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
