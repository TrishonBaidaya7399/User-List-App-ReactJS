// UserDetails.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaEarthAsia } from "react-icons/fa6";


const UserDetails = () => {
  const { userId } = useParams(); 
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/users/${userId}`);
        const data = await response.json();
        console.log(data);
        setUserDetails(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [userId]);
console.log("Selected User: "+userDetails);
  return (
    <div className="my-6 md:my-12 px-2 md:px-12 lg:px-[100px]">
      {userDetails ? (
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-4 w-full md:w-1/3">
            <div className="text-center p-4 rounded-lg drop-shadow-xl bg-purple-600/10 backdrop-blur-md">
              <img
                src={userDetails.image}
                alt={userDetails.firstName}
                className="w-40 h-40 rounded-full mx-auto mb-4 border-2 border-purple-600 p-1"
              />
              <div className="mx-auto">
                <p className="text-xl font-bold text-purple-600">{`${userDetails?.firstName} ${userDetails?.lastName}`}</p>
                <p className="text-gray-600">{`${userDetails?.company?.title}`}</p>
                <p className="text-gray-600 font-semibold text-lg">{`Company: ${userDetails?.company?.name}`}</p>
              </div>
            </div>
            <div className="text-start p-4 rounded-lg bg-purple-600/10 backdrop-blur-md drop-shadow-xl h-full overflow-hidden ">
                <div className="flex flex-col gap-1">

                <p className="text-gray-600 flex items-center gap-1"><FaEarthAsia  className="text-purple-600 "/>{`${userDetails?.domain}`}</p>
                <p className="text-gray-600 flex items-center gap-1"><FaPhoneAlt className="text-purple-600"/>{`${userDetails?.phone}`}</p>
                <p className="text-gray-600 flex items-center gap-1"><MdEmail  className="text-purple-600"/>{`${userDetails?.email}`}</p>
                </div>
            </div>
          </div>
          <div className="p-4 rounded-lg bg-purple-600/10 backdrop-blur-md drop-shadow-xl w-full md:w-2/3">
          <p className="rounded-lg mb-1 text-gray-600 border-2 border-gray-400 px-10 mr-auto py-2">Age: {`${userDetails?.age}`} Years</p>
          <p className="rounded-lg mb-1 text-gray-600 border-2 border-gray-400 px-10 mr-auto py-2">Gender: {`${userDetails?.gender}`}</p>
          <p className="rounded-lg mb-1 text-gray-600 border-2 border-gray-400 px-10 mr-auto py-2">Blood Group: {`${userDetails?.bloodGroup}`}</p>
          <p className="rounded-lg mb-1 text-gray-600 border-2 border-gray-400 px-10 mr-auto py-2">Birth Date: {`${userDetails?.birthDate}`}</p>
          <p className="rounded-lg mb-1 text-gray-600 border-2 border-gray-400 px-10 mr-auto py-2">Address: {`${userDetails?.address?.address ? userDetails?.address?.address : userDetails?.address?.street}`}, {`${userDetails?.address?.city}`} </p>
          <h2 className="text-xl text-purple-600 px-10 mr-auto py-2">Company Details</h2>
          <p className="rounded-lg mb-1 text-gray-600 px-10 mr-auto py-2">Name: {`${userDetails?.company?.name}`}</p>
          <p className="rounded-lg mb-1 text-gray-600 px-10 mr-auto py-2">Address: {`${userDetails?.company?.address?.address ? userDetails?.company?.address?.address : userDetails?.company?.Address}`}, {`${userDetails?.company?.address?.city ? userDetails?.company?.address?.city : userDetails?.company?.City}`} </p>
          <p className="rounded-lg mb-1 text-gray-600 px-10 mr-auto py-2">Department: {`${userDetails?.company?.department}`}</p>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center py-[20%]">
        <span className="loading loading-spinner text-accent w-12 h-12"></span>
      </div>
      )}
    </div>
  );
};

export default UserDetails;
