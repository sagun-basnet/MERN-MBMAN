import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  console.log(currentUser);

  return (
    <nav className="flex justify-between items-center px-4 h-[5rem] bg-amber-500">
      <h1 className="text-3xl font-bold">LOGO</h1>
      <ul className="flex gap-4">
        <Link to={"/"}>
          <li>Home</li>
        </Link>

        <Link to={"/about"}>
          <li>About</li>
        </Link>
        <Link to={"/service"}>
          <li>Service</li>
        </Link>
        <Link to={"/contact"}>
          <li>Contact</li>
        </Link>
      </ul>
      {/* {
    username.length !== 0 && <span>{username}</span>
} */}
      {/* <div className="flex gap-6 ">
        <button className="bg-red-500 text-white font-bold">Login</button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold transition-colors">
          Register
        </button>
      </div> */}

      {!currentUser ? (
        <div className="flex gap-6 ">
          <button className="bg-red-500 text-white font-bold">Login</button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold transition-colors">
            Register
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              logout();
            }}
            className="bg-red-500 text-white font-bold"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
