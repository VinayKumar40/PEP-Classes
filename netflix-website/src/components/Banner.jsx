import React from "react";
import { movies } from "../data/movies";

const Banner = () => {
    const movie = movies[0]; // Featured movie

    const bannerStyle = {
        color: "white",
        objectFit: "contain",
        height: "448px",
        backgroundImage: `url(${movie.backdrop})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        position: "relative",
    };

    const contentStyle = {
        marginLeft: "30px",
        paddingTop: "140px",
        height: "190px",
    };

    const titleStyle = {
        fontSize: "3rem",
        fontWeight: "800",
        paddingBottom: "0.3rem",
    };

    const buttonStyle = {
        cursor: "pointer",
        color: "#fff",
        outline: "none",
        border: "none",
        fontWeight: "700",
        borderRadius: "0.2vw",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        marginRight: "1rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        backgroundColor: "rgba(51, 51, 51, 0.5)",
    };

    const descriptionStyle = {
        width: "45rem",
        lineHeight: "1.3",
        paddingTop: "1rem",
        fontSize: "0.8rem",
        maxWidth: "360px",
        height: "80px",
    };

    const fadeBottomStyle = {
        height: "7.4rem",
        backgroundImage: "linear-gradient(180deg, transparent, rgba(37, 37, 37, 0.61), #111)",
        position: "absolute",
        bottom: 0,
        width: "100%",
    };

    return (
        <header style={bannerStyle}>
            <div style={contentStyle}>
                <h1 style={titleStyle}>{movie.title}</h1>
                <div>
                    <button style={buttonStyle}>Play</button>
                    <button style={buttonStyle}>My List</button>
                </div>
                <h1 style={descriptionStyle}>{movie.description}</h1>
            </div>
            <div style={fadeBottomStyle} />
        </header>
    );
};

export default Banner;
