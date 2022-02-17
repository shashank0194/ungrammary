import React from 'react'
import group from './images/Group 1822.png'
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
        if ((inputEle >= 65 && inputEle <= 90) || (inputEle >= 97 && inputEle <= 122) || inputEle == 32) {
            setNameError(false);
            setName(e.target.value);
        } else {
            setNameError(true);
        }
    }


    return (
        <div className={Styles.main_cont}>
            <div className={Styles.inner_cont}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid" style={{ marginTop: "15px" }}>
                        <b className='ps-3 pe-5'><a className="navbar-brand" id={Styles.ungrammary_font}><span className={Styles.span}>un</span>grammary</a></b>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse nav_tabs"
                            id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item px-3">
                                    <a className="nav-link" aria-current="page" style={{ color: "#011E40" }}>About us</a>
                                </li>
                                <li className="nav-item px-3">
                                    <a className="nav-link" style={{ color: "#011E40" }} >Solution</a>
                                </li>
                                <li className="nav-item px-3">
                                    <a className="nav-link" style={{ color: "#011E40" }} >Global Network</a>
                                </li>
                            </ul>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown" >
                            <ul className="navbar-nav" id={Styles.rightPortion}>
                                <li className="nav-item px-2">
                                    <button type="button" className="btn btn-primary"
                                        // style={{ background: "none", color: "black", borderBlockColor: "black"}}
                                        id={Styles.contact_btn}
                                    >Contact us</button>
                                </li>
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
                <div class="card mb-3 fluid-container" style={{ border: "none", background: "none" }}>
                    <div class="row g-0">
                        <div class="col-md-6">
                            <br />
                            <br />
                            <br />
                            <br />
                            <img src={group} class="img-fluid rounded-start" alt="..." id={Styles.img} />
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <div className="formContainer">
                                    <div>
                                        <h1 className={Styles.color}>Hi, let's get in touch.</h1>
                                    </div>
                                    {
                                        numberError === true ? (
                                            <TextField
                                                onKeyPress={(e) => diplayNumberError(e)}
                                                label="Phone no"
                                                helperText="Enter valid number"
                                                sx={{ ml: 1, mb: 5, mt: 4, width: '96%' }}
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
                                                sx={{ ml: 1, mb: 5, mt: 4, width: '96%' }}
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
                                        sx={{ ml: 1, mb: 5, width: '96%' }}
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
                                                sx={{ ml: 1, mb: 5, width: '96%' }}
                                            />
                                        ) : (
                                            <TextField
                                                onKeyPress={(e) => displayNameError(e)}
                                                label="Enter name"
                                                defaultValue="John Doe"
                                                sx={{ ml: 1, mb: 5, width: '96%' }}

                                            />
                                        )
                                    }

                                    <TextField
                                        label="Email address"
                                        defaultValue="John Doe"
                                        sx={{ ml: 1, mb: 5, width: '96%' }}
                                    />

                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Message"
                                        multiline
                                        rows={4}
                                        sx={{ ml: 1, mb: 5, width: '96%' }}
                                    />
                                    <button type="button" class="btn btn-primary" style={{ marginLeft: "8px" }}>Primary</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
