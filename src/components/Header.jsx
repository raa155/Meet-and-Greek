import React from 'react';
import './Header.css';


const Header = () => {
    return(
       <section className="header-section">
            <div className="header-overlay"></div>
           <div className="header-content">
                <h1>Latest Greek Trends</h1>
           </div>
       </section>     
    );
}

export default Header;