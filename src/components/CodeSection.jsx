import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { LoadingSpinner } from "../helper/LoadingSpinner";
import { FaClipboard, FaFlagCheckered } from "react-icons/fa6";

function CodeSection() {
  // states for loading
  const [data, setData] = useState([]);
  const [Isloading, setIsloading] = useState(false);

  // fetching data from firebase
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsloading(true);
        const response = await fetch(
          "https://react-app-128f5-default-rtdb.firebaseio.com/.json",
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
        // throw new Error("Failed to fetch data");
      } finally {
        setIsloading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex justify-center">
      {!Isloading ? (
        data.map((id) => <ClipSection id={id} key={id} />)
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export default CodeSection;

export function ClipSection({ id }) {
  return (
    <div onClick={() => Navigate(`/${id}`)}>
      <div className="flex justify-between">
        <span>
          <FaFlagCheckered className="text-red-500" size={20} />
        </span>
        <span>
          <FaClipboard className="text-blue-500" size={20} />
        </span>
      </div>
      <div>
        <div>
          <h2 className=""></h2>
        </div>
      </div>
    </div>
  );
}
