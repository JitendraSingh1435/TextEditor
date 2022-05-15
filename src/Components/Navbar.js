import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import icon from './favicon-32x32.png';

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.finalMode} bg-${props.finalMode}`}>
                <div className="container-fluid">
                    {/* <Link className='logp' href='/'>{props.icon}</Link> */}
                    <img src={icon} alt="..." className="rounded mx-2"></img>
                    <Link className={`navbar-brand text-${props.finalMode === 'light' ? '#212529' : 'light'}`} to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link active text-${props.finalMode === 'light' ? '#212529' : 'light'}`} aria-current="page" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className={`nav-link text-${props.finalMode === 'light' ? '#212529' : 'light'}`} to="/about">{props.abtText}</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className={`btn btn-outline-${props.finalMode === 'light' ? 'primary' : 'light'}`} type="submit">Search</button>
                        </form>
                        <div className={`form-check form-switch mx-3 text-${props.finalMode === 'light' ? '#212529' : 'light'}`}>
                            <input className="form-check-input" type="checkbox" onClick={()=>{props.allMode('dark')}} role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label-light" htmlFor="flexSwitchCheckDefault"> Dark Mode </label>
                        </div>
                    </div>
                    {/* <div className="bg-info rounded mx-2" style={{ heigh: "30px", width: "30px" }}></div> */}
                    <button type="button" className=" btn btn-info btn-lg rounded mx-2" onClick={()=>{props.allMode('primary')}} style={{cursor: 'pointer'}} /*onClick={props.blueToggleMode}*/></button>
                    <button type="button" className="btn btn-success btn-lg rounded" onClick={()=>{props.allMode('success')}} style={{cursor: 'pointer'}} /*onClick={props.greenToggleMode}*/></button>
                    <button type="button" className="btn btn-warning btn-lg rounded mx-2" onClick={()=>{props.allMode('warning')}} style={{cursor: 'pointer'}} /*onClick={props.yellowToggleMode}*/ ></button>
                    <button type="button" className="btn btn-danger btn-lg rounded" onClick={()=>{props.allMode('danger')}} style={{cursor: 'pointer'}} /*onClick={props.redToggleMode}*/ ></button>
                </div>
            </nav>
        </div>
    );
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,     // is required means we have to pass this prop in components
    abtText: PropTypes.string
}

// default props
Navbar.defaultProps = {
    title: 'default TextUtils',
    abtText: 'default About Us'
}