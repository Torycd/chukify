import { useEffect, useState } from "react";

import { LoadingSpinner } from "../helper/LoadingSpinner";
import ClipSection from "./ClipSection";

function CodeSection() {
  // states for loading
  const [data, setData] = useState([]);
  const [Isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

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
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    };
    fetchData();
  }, []);
  console.log(error);
  return (
    <div className="flex justify-center items-center p-5">
      <div className="grid grid-cols-2 gap-4">
        {!Isloading ? (
          data.map((dt) => (
            <div key={dt.id} className="w-120 h-100">
              <ClipSection data={dt} />
            </div>
          ))
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
}

export default CodeSection;
