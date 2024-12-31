import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg">
            <div className="container">
                <a className="navbar-brand fw-bold" href="#">
                    Ask<span style={{ color: "#007bff" }}>AI</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#hero">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#features">
                                Features
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                About Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#faq">
                                FaQ
                            </a>
                        </li>
                    </ul>
                    <Link to="/chat" className="btn btn-primary-nav ms-3">
                        Chat Now
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
