import { Link, BrowserRouter as Router } from "react-router-dom";
import socialIcons from "../assets/socialIcons.svg";

export default function NavigationFooter() {
  return (
    <div className="border-t border-[#E6E6E6] mx-20 flex flex-row justify-between mt-48">
      <div className="flex flex-col justify-between">
        <h1 className=" text-2xl">Site Name</h1>
        <img
          src={socialIcons}
          className="bottom-0 left-0 "
          alt="Social Media Icons"
        ></img>
      </div>
      <div className="flex flex-row gap-[31px] font-medium text-base">
        <Router>
          <ul className="flex flex-col gap-[48px] items-center  w-[187px]">
            <Link to="#">
              <li>Topic</li>
            </Link>
            <Link to="#">
              <p className="text-[#454545]">Page</p>
            </Link>
            <Link to="#">
              <p className="text-[#454545]">Page</p>
            </Link>
            <Link to="#">
              <p className="text-[#454545]">Page</p>
            </Link>
          </ul>
          <ul className="flex flex-col gap-[48px] items-center  w-[187px]">
            <Link to="#">
              <li>Topic</li>
            </Link>
            <Link to="#">
              <p className="text-[#454545]">Page</p>
            </Link>
            <Link to="#">
              <p className="text-[#454545]">Page</p>
            </Link>
            <Link to="#">
              <p className="text-[#454545]">Page</p>
            </Link>
          </ul>
          <ul className="flex flex-col gap-[48px] items-center  w-[187px]">
            <Link to="#">
              <li>Topic</li>
            </Link>
            <Link to="#">
              <p className="text-[#454545]">Page</p>
            </Link>
            <Link to="#">
              <p className="text-[#454545]">Page</p>
            </Link>
            <Link to="#">
              <p className="text-[#454545]">Page</p>
            </Link>
          </ul>
        </Router>
      </div>
    </div>
  );
}
