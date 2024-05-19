import "./sidebar.css";

export default function Sidebar() {
  return (
    <>
      <div className="h-[90vh] w-1/4 px-5">
        <div className="grad h-full w-full pt-3 rounded-2xl">
          <div className="circle h-72 w-72 bg-gray-500 rounded-full mx-auto"></div>
          <div className="h-6 w-full mt-5 flex justify-center items-center font-semibold text-2xl">
            Abhikar Neekhra
          </div>
          <div className="h-6 w-full mt-2 flex justify-center items-center lily font-semibold text-2xl">
            2021mc26ab@mitsgwl.ac.in
          </div>
          <div className="h-6 w-full mt-2 flex justify-center items-center lily font-semibold text-xl">
            Mathematics & Computing
          </div>

          <button className="h-12 w-fit bg-blue-200 mt-14 text-2xl px-6 hover:border hover:border-black ease-linear py-3 font-semibold rounded-full cursor-pointer flex justify-center items-center m-auto">
            Add New Blog
          </button>
          <button className="h-12 w-fit bg-blue-200 mt-5 text-2xl px-6 hover:border hover:border-black py-3 font-semibold rounded-full cursor-pointer flex justify-center items-center m-auto">
            Show My Posts
          </button>
        </div>
      </div>
    </>
  );
}
