import React from 'react';
import logo from '../../../assets/logo-vagas.png';
import {Link} from 'react-router-dom';

const header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
        <Link className="navbar-brand" to='/dashboard'>
          <img src={logo} style={ { width: '100px;', height: '40px'} } />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active text-white" to='/vagas'>Vagas</Link>
            <Link className="nav-item nav-link text-white" to='/sobre'>Sobre</Link>
          </div>
        </div>
      </nav>
    );
}

export default header;