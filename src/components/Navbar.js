import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li> */}
                    </ul>

                    <button type="button" class="btn rounded-circle mx-3 btn-color-blue"></button>
                    <button type="button" class="btn rounded-circle mx-3 btn-color-red" ></button>
                    <button type="button" class="btn rounded-circle mx-3 btn-color-yellow" ></button>
                    <button type="button" class="btn rounded-circle mx-3 btn-color-green" ></button>
                    {/* <button type="button" class="btn rounded-circle mx-3 btn-color-blue" onClick={props.changeColorBg('blue')}></button>
                    <button type="button" class="btn rounded-circle mx-3 btn-color-red" onClick={props.changeColorBg('red')}></button>
                    <button type="button" class="btn rounded-circle mx-3 btn-color-yellow" onClick={props.changeColorBg('yellow')}></button>
                    <button type="button" class="btn rounded-circle mx-3 btn-color-green" onClick={props.changeColorBg('green')}></button> */}
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle}/>
                            <label class={`form-check-label text-${(props.mode==='light')?'dark':'light'}`} for="flexSwitchCheckDefault">{props.toggleSwitchText}</label>
                    </div>
                </div>
            </div>

        </nav>
    )
}

Navbar.prototypes = { title: PropTypes.string }

Navbar.defaultProps = { title: 'Set your title here' }