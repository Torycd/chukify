import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import LoadingSpinner from "./components/helper/LoadingSpinner";

function CodeSection() {
  const [data, setData] = useState([]);
  const [Isloading, setIsloading] = useState(false);

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
      } catch (error) {
        console.log(error);
        // throw new Error("Failed to fecth data");
      } finally {
        setIsloading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
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
  return <div onClick={() => Navigate(`/${id}`)}>ClipSection</div>;
}
