import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <div className="page-position-nav">
        <div>
          <Link to="/home">
            <div>
              <p>Home</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/service">
            <div>
              <p>service</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/client">
            <div>
              <p>client</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/portfolio">
            <div>
              <p>portfolio</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/team">
            <div>
              <p>team</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/contact">
            <div>
              <p>contact</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/career">
            <div>
              <p>career</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
