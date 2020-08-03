import React from 'react';
import {Link} from 'react-router-dom';

 function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <li>
                        <Link className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                
                
                </div>
            </div>
        </nav>
    )
}
export default Navbar;
