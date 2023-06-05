import React from 'react'

export default function Navbar() {
  return (
   
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
        <div className="container">
            <a className="navbar-brand fw-bold" href="#" style={{fontFamily:"'Indie Flower'"}}>IT FUNDA</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link btn  fw-bold" href="index2.php">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn  fw-bold ms-2" href="http://itfunda.rf.gd/signup.html">Register</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>

    
  )
}
