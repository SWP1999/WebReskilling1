import { BrowserRouter as Router, Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="bg-white flex flex-row justify-between px-20 py-[67px] items-center ">
      <Router>
        <h1 className="font-medium text-xl">Site Name</h1>
        <ul className="flex flex-row gap-[48px] items-center font-medium text-xl">
          <Link to="#">
            <p className="text-[#454545]">Page</p>
          </Link>
          <Link to="#">
            <p className="text-[#454545]">Page</p>
          </Link>
          <Link to="#">
            <p className="text-[#454545]">Page</p>
          </Link>
          <button
            value="Button"
            className="px-6 py-3.5 bg-black text-white rounded-lg"
          >
            Button
          </button>
        </ul>
      </Router>
    </div>
  );
}
