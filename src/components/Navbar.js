import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 bg py-2">
      <nav className="navbar navbar-dark" >
        <Link className="navbar-brand" to="/">
          Brain React
        </Link>

        <ul className="nav ml-auto">
        <li className="nav-item">
            <Link to="/" className="nav-link text-light">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cerebrum" className="nav-link text-light">
              Cerebrum
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cerebellum" className="nav-link text-light">
              Cerebellum
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/brainstem" className="nav-link text-light">
              Brain Stem
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pituitary" className="nav-link text-light">
              Pituitary
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hypothalamus" className="nav-link text-light">
              Hypothalamus
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
