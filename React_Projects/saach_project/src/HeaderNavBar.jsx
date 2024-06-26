import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import ImageUpload from "./components/ImageUpload.jsx";
import Cart from "./components/Cart.jsx";
import LogOut from "./components/user_login/LogOut.jsx";

export default function HeaderNavBar() {
  let headerbuttonclasses =
    "flex-row m-2 gap-4 px-4 py-2 font-semibold uppercase rounded text-slate-900 bg-amber-400 hover:bg-amber-500";
  return (
    <Router>
      <div className="header">
        <div className="header__menu">
          <div className="header__menu-items">
            <Link to="/">
              <button type="button" className={headerbuttonclasses}>
                Homepage
              </button>
            </Link>
            <Link to="/ImageUpload">
              <button type="button" className={headerbuttonclasses}>
                ImageUpload
              </button>
            </Link>
            <Link to="/Cart">
              <button type="button" className={headerbuttonclasses}>
                Cart
              </button>
            </Link>
            <Link to="/user_login/Logout">
              <button type="button" className={headerbuttonclasses}>
                Logout
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ImageUpload" element={<ImageUpload />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/user_login/LogOut" element={<LogOut />} />
      </Routes>
    </Router>
  );
}
