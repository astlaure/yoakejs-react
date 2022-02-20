import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(): React.ReactElement {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Kozaku</Link>
      </div>
    </nav>
  );
}

export default Navbar;
