import React, { useState } from "react";
import Header from "../../Components/Header/header";

const Events = () => {
  // Mock data for events
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "TechFest 2024",
      date: "April 20, 2024",
      isActive: true,
    },
    {
      id: 2,
      name: "Cultural Night",
      date: "March 15, 2024",
      isActive: false,
    },
    {
      id: 3,
      name: "Sports Tournament",
      date: "February 10, 2024",
      isActive: false,
    },
    // Add more event objects here
    {
      id: 4,
      name: "Annual Gala",
      date: "May 5, 2024",
      isActive: true,
    },
    {
      id: 5,
      name: "Coding Competition",
      date: "June 12, 2024",
      isActive: true,
    },
    {
      id: 6,
      name: "Dance Workshop",
      date: "July 8, 2024",
      isActive: false,
    },
  ]);

  // Function to handle registration button click
  const handleRegister = (eventId) => {
    // Add your registration logic here
    console.log(`Register for event with id ${eventId}`);
  };

  return (
    <>
      <Header />
      <div className="h-[89vh] w-full">
        <div className="block bg-transparent p-4 w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border border-solid shadow-md border-l-0 border-r-0">
                <th className="text-md px-6 py-3">Event Name</th>
                <th className="text-md px-6 py-3">Date</th>
                <th className="text-md px-6 py-3">Status</th>
                <th className="text-md px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr
                  key={event.id}
                  className="border border-solid border-l-0 border-r-0"
                >
                  <td className="text-md text-center px-6 py-3">
                    {event.name}
                  </td>
                  <td className="text-md text-center px-6 py-3">
                    {event.date}
                  </td>
                  <td className="text-md text-center px-6 py-3">
                    {event.isActive ? "Active" : "Expired"}
                  </td>
                  <td className="text-md text-center px-6 py-3">
                    {event.isActive && (
                      <button
                        className="py-2 px-6 rounded-md outline-1 cursor-pointer hover:bg-green-400 hover:text-white hover:font-semibold bg-green-200"
                        onClick={() => handleRegister(event.id)}
                      >
                        Register
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Events;
