import React from 'react';
import './styles.css';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                < a href="/">
                    <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo.png" alt="Netflix"/>
                </a>
            </div>
            <div class="header--user">
                <a href="/">
                    <img src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/92995677ac0aab719760c33c_rw_600.png?h=c453d5442731bca5c02fcc8a4542af57" alt="Perfil"/>
                </a>
            </div>
        </header>
    )
}