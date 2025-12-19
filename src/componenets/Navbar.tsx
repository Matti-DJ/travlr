import "..//componenets/ComponentsStyling/Navbar.css";

function Navbar() {
    return (
        <>
            <div id="NavbarContainer">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand " href="/">
                            <img src="./Gemini-logo.png" alt="Logo" width="40" height="40" className="d-inline-block align-text-center"/>
                            Travlr
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto" id ="navbarNav">
                            <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/destinations">Destinations</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/experiences">Experiences</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;