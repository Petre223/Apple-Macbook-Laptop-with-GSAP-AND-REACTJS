import { navLinks } from "../Constants/index.js";

const NavBar = () => {
    return (
        <header className="navbar">
            <nav className="navbar-container" aria-label="Main navigation">

                {/* Logo */}
                <a href="/" className="navbar-logo">
                    <img 
                        src="/logo.svg" 
                        alt="Apple logo" 
                        className="logo-img"
                    />
                </a>

                {/* Navigation Links */}
                <ul className="navbar-links">
                    {navLinks.map(({ label, path }) => (
                        <li key={label}>
                            <a href={path} className="nav-link">
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Icons */}
                <div className="flex-center gap-3">
                    <button aria-label="Search" className="icon-button">
                        <img src="/search.svg" alt="" aria-hidden="true" />
                    </button>
                    <button aria-label="Cart" className="icon-button">
                        <img src="/cart.svg" alt="" aria-hidden="true" />
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
