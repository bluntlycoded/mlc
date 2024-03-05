import {React,useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../Images/removebg.png'

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
  
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return (
    <>
    <br/>
        <br/>
        <br/>
    <nav style={{// Updated background color
      color: "white",
      fontFamily: "Poppins",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 2rem",
      fontStyle: "bold",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Added box shadow for a modern touch
    }} className={`navbar ${scrolling ? 'scrolling' : ''}`}>
      <img src={logo} alt="logo" style={{ width: "50px", height: "50px" }} />
      {/* <Link to="/" style={{ textDecoration: "none", color: "inherit", fontSize: "1.5rem", fontWeight: "bold" }}className='nms'>The Machine Learning Club</Link> */}
      <div className="nav-links">
      {/* {scrolling ? 'Scrolling' : 'Not Scrolling'} */}
        {/* Desktop Links */}
        <div className='desktop'>
          <ul className="desktop-links" style={{ display: "flex", gap: "1rem" }}>
            <li><Link to="/" style={{ textDecoration: "none", color: "white" }}>Home</Link></li>
          
            <li><Link to="/about" style={{ textDecoration: "none", color: "white" }}>About Us</Link></li>
            <li><Link to="/contact" style={{ textDecoration: "none", color: "white" }}>Contact Us</Link></li>
            <li><Link to="/projects" style={{ textDecoration: "none", color: "white" }}>Projects</Link></li>
            <li><Link to="/events" style={{ textDecoration: "none", color: "white" }}>Events</Link></li>
            <li><Link to="/departments" style={{ textDecoration: "none", color: "white" }}>Departments</Link></li>
          </ul>
        </div>
        {/* Mobile Menu */}
        <div className='mobile'>
        <div className="mobile-menu" style={{ display: mobileMenuOpen ? "block" : "none" }}>
          
          <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
            <li><Link to="/about" style={{ textDecoration: "none", color: "white" }}>About Us</Link></li>
            <li><Link to="/contact" style={{ textDecoration: "none", color: "white" }}>Contact Us</Link></li>
            <li><Link to="/projects" style={{ textDecoration: "none", color: "white" }}>Projects</Link></li>
            <li><Link to="/events" style={{ textDecoration: "none", color: "white" }}>Events</Link></li>
            <li><Link to="/departments" style={{ textDecoration: "none", color: "white" }}>Departments</Link></li>
          </ul>
        </div>
        <Link to="#" className="menu-icon" style={{ fontSize: "1.5rem", color: "white" }} onClick={toggleMobileMenu}>☰</Link>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
