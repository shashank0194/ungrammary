import React from 'react';
import styled from 'styled-components'
const Toolbar = styled.header`
span{
  text-decoration:underline
}
.move{
  position:absolute;
  right:40px;
  @media all and (max-width:968px){   
   left:0;
   padding-left:20px
   } 
}

`

function App() {

    return (
        <Toolbar>
            <div className="App" >
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <b className='ps-3 pe-5'><a className="navbar-brand" ><span >un</span>grammary</a></b>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item px-3">
                                    <a className="nav-link active" aria-current="page" >About us</a>
                                </li>
                                <li className="nav-item px-3">
                                    <a className="nav-link" >Solution</a>
                                </li>
                                <li className="nav-item px-3">
                                    <a className="nav-link" >Global Network</a>
                                </li>
                            </ul>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown" >
                            <ul className="navbar-nav move">
                                <li className="nav-item px-2">
                                    <button type="button" className="btn btn-primary" style={{ background: "none", color: "black", borderBlockColor: "black" }}>Contact us</button>
                                </li>
                                <li className="nav-item px-2 dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown link
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><a className="dropdown-item" >Action</a></li>
                                        <li><a className="dropdown-item" >Another action</a></li>
                                        <li><a className="dropdown-item" >Something else here</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div class="card mb-3 fluid-container">
                    <div class="row g-0">
                        <div class="col-md-6">
                            <img src="..." class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Toolbar>
    );
}

export default App;