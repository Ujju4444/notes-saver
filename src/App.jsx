import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./components/Home";
import Paste from "./components/Paste";
import ViewPaste from "./components/ViewPaste";
import Navbar from "./components/Navbar";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <div className="w-full h-full flex flex-col">
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: "/pastes",
      element: (
        <div className="w-full h-full flex flex-col">
          <Navbar />
          <Paste />
        </div>
      ),
    },
    {
      path: "/pastes/:id",
      element: (
        <div className="w-full h-full flex flex-col">
          <Navbar />
          <ViewPaste />
        </div>
      ),
    },
    {
      path: "*",
      element: (
        <div className="w-full h-full flex flex-col">
          <Navbar />
          <Home />
        </div>
      ),
    },
  ],
  {
    basename: "/notes-saver", // THIS FIXES GitHub Pages routing
  }
);

export default function App() {
  return <RouterProvider router={router} />;
}
