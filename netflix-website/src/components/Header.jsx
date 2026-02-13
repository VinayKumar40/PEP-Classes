import React, { useState, useEffect } from "react";

const Header = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const headerStyle = {
        position: "fixed",
        top: 0,
        width: "100%",
        padding: "20px",
        height: "30px",
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "background-color 0.5s ease-in",
        backgroundColor: show ? "#111" : "transparent",
    };

    const logoStyle = {
        color: "#E50914",
        fontSize: "30px",
        fontWeight: "bold",
        cursor: "pointer",
        textDecoration: "none",
    };

    const navLinksStyle = {
        display: "flex",
        gap: "20px",
        marginRight: "40px",
    };

    const linkStyle = {
        color: "white",
        textDecoration: "none",
        fontSize: "14px",
        fontWeight: "600",
    };

    return (
        <div style={headerStyle}>
            <a href="#" style={logoStyle}>NETFLIX</a>
            <div style={navLinksStyle}>
                <a href="#" style={linkStyle}>Home</a>
                <a href="#" style={linkStyle}>TV Shows</a>
                <a href="#" style={linkStyle}>Movies</a>
                <a href="#" style={linkStyle}>New & Popular</a>
                <a href="#" style={linkStyle}>My List</a>
            </div>
        </div>
    );
};

export default Header;
