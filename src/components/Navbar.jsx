import { FaHouse, FaPhone } from "react-icons/fa6";

import LOGO from "../assets/LOGO.png";
import { useParams } from "react-router-dom";

function Navbar() {
  const { id } = useParams();
  return (
    <div className="flex justify-between rounded-full mb-5 sm:mb-20">
      <img
        src={LOGO}
        alt="Logo"
        className="font-bold w-[112px] sm:w-[320px] hover: cursor-pointer hover:scale-105"
      />
      <ul className="flex text-xl justify-between gap-20 font-semibold">
        <ListItem>
          <span>
            <FaHouse className="text-blue-500" />
          </span>
          Home
        </ListItem>
        <ListItem>
          <span>
            <FaPhone className="text-blue-500" />
          </span>
          Contact
        </ListItem>
      </ul>
    </div>
  );
}

export function ListItem({ children }) {
  return (
    <li className="flex justify-between gap-2 align-middle items-center hover:text-gray-800 cursor-pointer hover:scale-105 ">
      {children}
    </li>
  );
}

export default Navbar;
