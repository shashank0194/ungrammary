import React from 'react'
import group from './images/group.png'
import usa from './images/usa.png';
import india2 from './images/india2.png';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import Styles from './form.module.css'
import down from "./images/dropdown.svg";
import india3 from "./images/india3.png";
import nepal from "./images/nepal.jpg";
import usa2 from "./images/usa2.png";
import bhutan from "./images/bhutan.png";
import chaina from "./images/chaina.jpg";

const flags = [
    {
        flag: india3,
        country: "India"
    },
    {
        flag: nepal,
        country: "Nepal"
    },
    {
        flag: usa2,
        country: "USA"
    },
    {
        flag: bhutan,
        country: "Bhutan"
    },
    {
        flag: chaina,
        country: "Chaina"
    }
]

export const Form = () => {
    // state for mobile number
    const [number, setNumber] = useState("");

    // state for country
    const [country, setCountry] = useState("India");

    // state for displaying mobile number error
    const [numberError, setNumberError] = useState(false);

    // state for name
    const [name, setName] = useState("");

    // state for displaying name error
    const [nameError, setNameError] = useState(false);

    //handler fynction to display error for mobile-number
    const diplayNumberError = (e) => {
        let inputEle = e.which
        // "which" property returns the ASCII value of the key that triggered the onkeypress event
        if (inputEle <= 57 && inputEle >= 48) {
            setNumber(e.target.value);
            setNumberError(false);
        } else {
            setNumberError(true);
        }
    }

    //handler function to change the country
    const handleChange = (e) => {
        setCountry(e.target.value);
    };
    //handler function for displaying name error
    const displayNameError = (e) => {
        let inputEle = e.which
        if (inputEle === 32 || (inputEle >= 97 && inputEle <= 122) || (inputEle >= 65 && inputEle <= 90)) {
            setNameError(false);
            setName(e.target.value);
        } else {
            setNameError(true);
        }
    }


    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-md-11 col-sm-12 m_auto">  
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand fs-1 font-weight-bold" id={Styles.ungrammary_font}><span className={Styles.span}>un</span>grammary</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-4">
                                    <li className="nav-item">
                                        <a className="nav-link font-weight-bold"  style={{ color: "#011E40" }} >About us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link font-weight-bold"  style={{ color: "#011E40" }} >Solution</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link font-weight-bold"  style={{ color: "#011E40" }} >Global Network</a>
                                    </li>
                                </ul>
                                <div className="d-flex">
                                    <button className="btn btn-outline-success"  id={Styles.contact_btn}>Contact us</button>
                                </div>
                                <ul className='navbar-nav'>
                                    <li className="nav-item px-2 dropdown" id={Styles.dropdown}>
                                        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                            <img src={usa} alt="" />
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <li><a className="dropdown-item"> <img src={india2} alt="" /> </a></li>
                                        </ul>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className="row ms-5 me-5 mb-0">
                <div className="col-md-6 mt-5" id={Styles.imgClass}>
                    <img src={group} className="img-fluid rounded-start mt-5" alt="..." id={Styles.img} />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <div>
                            <div className="h1 color">Hi, let's get in touch.</div>
                        </div>
                        {
                            numberError === true ? (
                                <TextField
                                    onKeyPress={(e) => diplayNumberError(e)}
                                    label="Phone no"
                                    helperText="Enter valid number"
                                    sx={{ ml: 1, mb: 2, mt: 4, width: '96%' }}
                                    error
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            <img src={india3} alt="flag" />
                                            <img src={down} alt="..." /> <span> |</span>
                                        </InputAdornment>,
                                    }}
                                />
                            ) : (
                                <TextField
                                    onKeyPress={(e) => diplayNumberError(e)}
                                    label="Phone no"
                                    sx={{ ml: 1, mb: 2, mt: 4, width: '96%' }}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start">
                                            <img src={india3} alt="flag" />
                                            <img src={down} alt="..." /> <span> |</span>
                                        </InputAdornment>,
                                    }}
                                />
                            )
                        }


                        <TextField
                            select
                            label="Select Country"
                            sx={{ ml: 1, mb: 2, width: '96%' }}
                            value={country}
                            onChange={handleChange}
                        >
                            {flags.map((ele) => (
                                <MenuItem key={ele.country} value={ele.country}>
                                    <img src={ele.flag} alt="flag" />
                                    {"  "}  <span className="align">{ele.country}</span>
                                </MenuItem>
                            ))}
                        </TextField>


                        {
                            nameError === true ? (
                                <TextField
                                    onKeyPress={(e) => displayNameError(e)}
                                    error
                                    label="Enter name"
                                    helperText="Special Character not allowed"
                                    defaultValue="John Doe"
                                    sx={{ ml: 1, mb: 2, width: '96%' }}
                                />
                            ) : (
                                <TextField
                                    onKeyPress={(e) => displayNameError(e)}
                                    label="Enter name"
                                    defaultValue="John Doe"
                                    sx={{ ml: 1, mb: 2, width: '96%' }}

                                />
                            )
                        }

                        <TextField
                            label="Email address"
                            defaultValue="John Doe"
                            sx={{ ml: 1, mb: 2, width: '96%' }}
                        />

                        <TextField
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={3}
                            sx={{ ml: 1, mb: 3, width: '96%' }}
                        />
                        <button type="button" className="btn btn-primary" style={{ marginLeft: "8px" }}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
