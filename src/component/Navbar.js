import React from 'react';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        Accueil
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/about" className="nav-link">
                        À propos
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/services" className="nav-link">
                        Services
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/contact" className="nav-link">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
