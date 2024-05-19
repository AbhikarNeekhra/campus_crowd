import "./topProjects.css";
export default function TopProjects() {
  return (
    <>
      <p className="h-11 w-full text-4xl select-none font-mono font-semibold pl-10 flex items-center">
        Top Minor Projects By Mits
      </p>
      <div className="h-64 w-full bg-red-200 grid grid-cols-3 gap-3 px-5 pt-3">
        <div className="h-3/4 w-80 bg-blue-200 rounded-2xl"></div>
        <div className="h-3/4 w-80 bg-blue-200 rounded-2xl"></div>
        <div className="h-3/4 w-80 bg-blue-200 rounded-2xl"></div>
      </div>
    </>
  );
}
