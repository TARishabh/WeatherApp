import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    const {cityName,handleOnChange,handleOnClick,PageNumberHandleOnChange,pageNumberOnClick,pageNumber} = props
    return (
        // <nav className="navbar navbar-expand-lg bg-body-tertiary bh-dark">
        <nav className="navbar navbar-expand-lg" style={{backgroundColor:'#2f3136'}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{color:'white'}} >Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    <form className="d-flex" role="search">
                        <input onChange={handleOnChange} value={cityName} className="form-control me-2" type="search" placeholder="Search Any City" aria-label="Search"/>
                            <button onClick={handleOnClick} className="btn btn-outline-success" type="button">Search</button>
                    </form>
                    <form className="d-flex" role="days">
                        <input onChange={PageNumberHandleOnChange} value={pageNumber} className="form-control me-2" type="days" placeholder="Number of days" aria-label="Days"/>
                            <button onClick={pageNumberOnClick} className="btn btn-outline-success" type="button">Search</button>
                    </form>
                </div>
        </nav>
    )
}

