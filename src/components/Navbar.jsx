import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom';

const Navbar = (props) => {
    const navRef = useRef(null);
    const location = useLocation();

    const handleChangeModeClick = (e) => {
        if (e.currentTarget.classList.contains('fa-moon')) {
            e.currentTarget.classList.remove('fa-moon');
            e.currentTarget.classList.add('fa-sun');

            document.body.style.backgroundColor = "#2c3e50";
            document.body.style.color = "wheat";

            props.setButtonStyles({
                backgroundColor: '#304a63',
            });

            navRef.current.classList.remove('bg-body-tertiary');
            navRef.current.style.backgroundColor = "#304a63";
        } else if (e.currentTarget.classList.contains('fa-sun')) {
            e.currentTarget.classList.remove('fa-sun');
            e.currentTarget.classList.add('fa-moon');

            document.body.style.backgroundColor = "#fff";
            document.body.style.color = "black";

            props.setButtonStyles({});

            navRef.current.classList.add('bg-body-tertiary');
            navRef.current.style.color = "black";
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" ref={navRef} data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.appName}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} to="/about">About</Link>
                            </li>

                        </ul>
                        <i className="fa-solid fa-moon btn" onClick={handleChangeModeClick}></i>
                    </div>
                </div>
            </nav></>
    )
}

Navbar.defaultProps = {
    appName: "App Name"
}

Navbar.propTypes = {
    appName: PropTypes.string
}

export default Navbar
