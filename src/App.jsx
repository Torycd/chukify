import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Homepage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/id",
      element: <h1>id</h1>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
