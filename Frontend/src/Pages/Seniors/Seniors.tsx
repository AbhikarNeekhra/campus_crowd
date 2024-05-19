import Header from "../../Components/Header/header";

export default function Seniors() {
  const data = [
    {
      session: "2025",
      enrollment: "0901MC211001",
      name: "Abhikar Neekhra",
      branch: "Mathematics & Computing",
      email: "iabhikarneekhra50@gmail.com",
    },
    {
      session: "2025",
      enrollment: "0901MC211002",
      name: "John Doe",
      branch: "Mathematics & Computing",
      email: "johndoe@example.com",
    },
    {
      session: "2025",
      enrollment: "0901MC211003",
      name: "Jane Smith",
      branch: "Mathematics & Computing",
      email: "janesmith@example.com",
    },
    {
      session: "2025",
      enrollment: "0901MC211004",
      name: "Alice Johnson",
      branch: "Mathematics & Computing",
      email: "alicejohnson@example.com",
    },
    {
      session: "2025",
      enrollment: "0901MC211005",
      name: "Bob Williams",
      branch: "Mathematics & Computing",
      email: "bobwilliams@example.com",
    },
    {
      session: "2025",
      enrollment: "0901MC211006",
      name: "Ella Brown",
      branch: "Mathematics & Computing",
      email: "ellabrown@example.com",
    },
    {
      session: "2025",
      enrollment: "0901MC211007",
      name: "Mike Davis",
      branch: "Mathematics & Computing",
      email: "mikedavis@example.com",
    },
    {
      session: "2025",
      enrollment: "0901MC211008",
      name: "Sophia Martinez",
      branch: "Mathematics & Computing",
      email: "sophiamartinez@example.com",
    },
    {
      session: "2025",
      enrollment: "0901MC211009",
      name: "David Garcia",
      branch: "Mathematics & Computing",
      email: "davidgarcia@example.com",
    },
    {
      session: "2025",
      enrollment: "0901MC211010",
      name: "Olivia Hernandez",
      branch: "Mathematics & Computing",
      email: "oliviahernandez@example.com",
    },
  ];

  const handleContact = (email) => {
    window.open(`mailto:?to=${email}&subject=Subject&body=Body`);
  };
  return (
    <>
      <Header />
      <div className="h-[89vh] w-full">
        <div className="h-20 w-full bg-green-200 px-6 py-2 flex justify-center items-center">
          <select className="px-3 py-2 outline-none rounded-xl cursor-pointer mx-5">
            <option className="text-md text-gray-600 grid place-items-center">
              SELECT THE BRANCH
            </option>
            <option className="text-md grid place-items-center">
              Computer Science & Engineering
            </option>
            <option className="text-md grid place-items-center">
              Mathematics & Computing
            </option>
            <option className="text-md grid place-items-center">
              Electrical Engineering
            </option>
            <option className="text-md grid place-items-center">
              Mechanical Engineering
            </option>
            <option className="text-md grid place-items-center">
              Civil Engineering
            </option>
          </select>
          <select className="px-3 py-2 outline-none rounded-xl cursor-pointer mx-5">
            <option className="text-md text-gray-600 grid place-items-center">
              YEAR
            </option>
            <option className="text-md grid place-items-center">2021</option>
            <option className="text-md grid place-items-center">2022</option>
            <option className="text-md grid place-items-center">2023</option>
            <option className="text-md grid place-items-center">2024</option>
            <option className="text-md grid place-items-center">2025</option>
          </select>
          <button className="px-6 py-2 rounded-md outline-1 cursor-pointer bg-white">
            Search
          </button>
        </div>
        {/* table from here */}
        <div className="block bg-transparent p-4 w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border border-solid shadow-md border-l-0 border-r-0">
                <th className="text-md px-6 py-3">Session</th>
                <th className="text-md px-6 py-3">Enrollment No.</th>
                <th className="text-md px-6 py-3">Name</th>
                <th className="text-md px-6 py-3">Branch</th>
                <th className="text-md px-6 py-3">Email</th>
                <th className="text-md px-6 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="border border-solid border-l-0 border-r-0"
                >
                  <td className="text-md px-6 py-3 text-center">
                    {item.session}
                  </td>
                  <td className="text-md px-6 py-3 text-center">
                    {item.enrollment}
                  </td>
                  <td className="text-md px-6 py-3 text-center">{item.name}</td>
                  <td className="text-md px-6 py-3 text-center">
                    {item.branch}
                  </td>
                  <td className="text-md px-6 py-3 text-center">
                    {item.email}
                  </td>
                  <td className="text-md px-6 py-3 text-center">
                    <button
                      className="py-2 px-6 rounded-md outline-1 cursor-pointer hover:bg-green-400 hover:text-white hover:font-semibold bg-green-200"
                      onClick={() => handleContact(item.email)}
                    >
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
