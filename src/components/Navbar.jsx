import { FaHouse, FaPhone } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="flex justify-between rounded-full mb-20">
      <h1 className="font-bold text-xl hover:text-gray-800 cursor-pointer hover:scale-105 ">
        Chunkify.dev
      </h1>
      <ul className="flex justify-between gap-20 font-semibold">
        <ListItem>
          <span>
            <FaHouse />
          </span>
          Home
        </ListItem>
        <ListItem>
          <span>
            <FaPhone />
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
