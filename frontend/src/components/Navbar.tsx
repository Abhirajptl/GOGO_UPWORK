import React, { useState } from 'react';
import { FiMenu, FiX, FiSearch } from 'react-icons/fi';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">GOGO</div>

      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <a href="#">Pricing</a>
      </div>

      <div className={`navbar-search ${isOpen ? 'open' : ''}`}>
        <input
          type="text"
          placeholder="Search by role, skills, or keywords"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button>
          <FiSearch className="search-icon" /> Search
        </button>
      </div>

      <div className={`navbar-actions ${isOpen ? 'open' : ''}`}>
        <a href="#" className="login">Log in</a>
        <a href="#" className="signup">Sign up</a>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </div>
    </nav>
  );
};

export default Navbar;
