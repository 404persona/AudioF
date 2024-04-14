import React, { useEffect, useState } from "react";
import axios from "axios";
// import Reports from "./Reports";

const Reports = () => {
  const [Users, setUsers] = useState([]); // Set Users as an empty array initially
  const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true
  const [Error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/user/getusers"
        );
        setUsers(response.data); // Set Users with fetched data (assumed to be an array)
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false); // Set loading state to false after fetching
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (Error) {
    return <h1>{Error.message}</h1>; // Display error message
  }

  return (
    <>
      <div className="overflow-hidden">
        <table className="w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                FullName
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                FirstName
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                LastName
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {Users.map((user) => (
              <tr
                key={user._id}
                className="hover:bg-green-100 cursor-pointer transition-all"
              >
                {" "}
                {/* Hover effect */}
                <td className="px-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-900">
                  {`${user.firstname} ${user.lastname}`}
                </td>
                <td className="px-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-900">
                  {user.firstname}
                </td>
                <td className="px-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-900">
                  {user.lastname}
                </td>
                <td className="px-4 py-2 border-b border-gray-200 text-sm font-medium text-gray-900">
                  {user.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Reports;
