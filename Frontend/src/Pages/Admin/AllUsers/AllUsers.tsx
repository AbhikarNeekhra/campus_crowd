import { useState, useEffect } from "react";
import Header from "../../../Components/Header/header";

export default function AllUsers() {
  const [users, setUsers] = useState([]);

  const getAllUsers = () => {
    fetch("http://localhost:6969/api/users/getAllWithRoles")
      .then((response) => response.json())
      .then((result) => {
        setUsers(result);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  // Function to map roles to display friendly role names
  const mapRoleName = (role) => {
    if (role === "ROLE_ADMIN") {
      return "ADMIN";
    } else if (role === "ROLE_USER") {
      return "USER";
    }
    // Add more role mappings if needed
    return role;
  };

  // Function to handle user deletion
  const deleteUser = (userId) => {
    fetch(`http://localhost:6969/api/users/${userId}`, {
      method: "DELETE",
    })
      .then(() => {
        setUsers(users.filter((user) => user.id !== userId));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <>
      <Header />
      <div className="h-[89vh] w-full">
        <div className="h-20 w-full bg-green-200 px-6 py-2 text-5xl font-bold flex justify-center items-center">
          ALL USERS OF <p className="text-[orange] ml-3">CAMPUS</p>-
          <p className="text-[red]">CROWD</p>
        </div>
        {/* table from here */}
        <div className="block bg-transparent p-4 w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border border-solid shadow-md border-l-0 border-r-0">
                <th className="text-md px-6 py-3">UserID</th>
                <th className="text-md px-6 py-3">Name</th>
                <th className="text-md px-6 py-3">Email</th>
                <th className="text-md px-6 py-3">Roles</th>
                <th className="text-md px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border border-solid border-l-0 border-r-0"
                >
                  <td className="text-md px-6 py-3 text-center">{user.id}</td>
                  <td className="text-md px-6 py-3 text-center">{user.name}</td>
                  <td className="text-md px-6 py-3 text-center">
                    {user.email}
                  </td>
                  <td className="text-md px-6 py-3 text-center">
                    {user.roles.map((role) => mapRoleName(role)).join(", ")}
                  </td>
                  <td className="text-md px-6 py-3 text-center">
                    <button
                      className="py-2 px-6 rounded-md hover:scale-105 cursor-pointer hover:bg-red-400 hover:text-white bg-red-200 mr-2"
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                    >
                      Delete
                    </button>
                    <button className="py-2 px-6 rounded-md hover:scale-105 cursor-pointer hover:bg-green-400 hover:text-white bg-green-200">
                      Contact
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
