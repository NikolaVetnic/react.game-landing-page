import { useState } from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            {/* <div className="logo">Game Title</div> */}
            <nav className="navbar active">
                <a href="#about">About</a>
                <a href="#features">Features</a>
                <a href="#screenshots">Screenshots</a>
                <a href="#trailer">Trailer</a>
            </nav>
            <div className="header-buttons">
                <button>Buy Now</button>
            </div>
        </header>
    );
};

const MobileHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="mobile-header">
            <div className="burger-menu" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav className={`navbar ${menuOpen ? "active" : ""}`}>
                <a href="#about" onClick={toggleMenu}>
                    About
                </a>
                <a href="#features" onClick={toggleMenu}>
                    Features
                </a>
                <a href="#screenshots" onClick={toggleMenu}>
                    Screenshots
                </a>
                <a href="#trailer" onClick={toggleMenu}>
                    Trailer
                </a>
            </nav>
            <div className="mobile-header-buttons">
                <button>Buy Now</button>
            </div>
        </header>
    );
};

export { Header, MobileHeader };
