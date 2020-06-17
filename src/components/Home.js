import React from 'react'
import { Link } from "gatsby"
import Logo from "../images/gatsby-icon.png"
import Logo_Conentful from "../images/contentful.svg"

const Home = () => {
    return (
        <div>
            <div className="logo-container">
                <div className="img-container">
                    <img src={Logo_Conentful} alt="logo" />
                </div>
                <div className="img-container">
                    <img src={Logo} alt="logo" />
                </div>
            </div>
            <div className="link-container">
                <h2>
                    <Link to="/" className="link" activeClassName="link-active">Home</Link>
                </h2>
                <h2>
                    <Link to="/article" className="link" activeClassName="link-active">Articles</Link>
                </h2>
            </div>
        </div>
    )
}

export default Home
