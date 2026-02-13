import React from "react";

const MovieRow = ({ title, movies }) => {
    const rowStyle = {
        marginLeft: "20px",
        color: "white",
    };

    const postersStyle = {
        display: "flex",
        overflowY: "hidden",
        overflowX: "scroll",
        padding: "20px",
        scrollbarWidth: "none", // For Firefox
    };

    // Inline style for hiding scrollbar for Chrome/Safari isn't possible, 
    // but we can make it look decent.

    const posterStyle = {
        width: "100%",
        objectFit: "contain",
        maxHeight: "250px",
        marginRight: "10px",
        transition: "transform 450ms",
        cursor: "pointer",
    };

    const handleMouseEnter = (e) => {
        e.currentTarget.style.transform = "scale(1.08)";
    };

    const handleMouseLeave = (e) => {
        e.currentTarget.style.transform = "scale(1)";
    };

    return (
        <div style={rowStyle}>
            <h2>{title}</h2>
            <div style={postersStyle}>
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        src={movie.poster}
                        alt={movie.title}
                        style={posterStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieRow;
