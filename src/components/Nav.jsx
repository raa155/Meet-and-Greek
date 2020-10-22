
import React from 'react';
import './nav.css';
let nav = () => {
    return(
        <section className="navbar">
            <nav>
                <span className="nav-brand">Meet and Greek</span>
                <ul className="nav-ul">
                    <li>Home</li>
                    <li>Events</li>
                    <li>Social Feed</li>
                    <li>Rankings</li>
                    <li>Charities</li>
                    <button className="nav-button"><i className="fa fa-user"></i> Log In</button>
                </ul>
            </nav>
        </section>
    );
}

export default nav;