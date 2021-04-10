import React from "react";
import { Link } from "react-router-dom";
export default function Nav() {
  return (
    <div>
      <div className="page-position-nav">
        {/* <div>
          <Link to="/home">
            <div>
              <p>Home</p>
            </div>
          </Link>
        </div> */}
        <div>
          <Link to="/service">
            <div className="positional">
              <p>service</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/client">
            <div className="positional">
              <p>client</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/portfolio">
            <div className="positional">
              <p>portfolio</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/team">
            <div className="positional">
              <p>team</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/contact">
            <div className="positional">
              <p>contact</p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/career">
            <div className="positional">
              <p>career</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
