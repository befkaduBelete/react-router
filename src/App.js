import {
  createBrowserRouter,
  Routes,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
)
function App() {
  return (

    // <header>
    //   <nav>
    //     <h1>Job Route</h1>
    //     <NavLink to="/" > Home</NavLink>
    //     <NavLink to="about">About</NavLink>

    //   </nav>
    // </header>
    <RouterProvider router={router} />

  );
}

export default App
