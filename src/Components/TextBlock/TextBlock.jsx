import React from "react";
import "./TextBlock.css";

const TextBlock = ({ title, paragraphs, highlights }) => {
    // Function to apply highlights to text
    const highlightText = (text, highlights) => {
        if (!highlights) return text;

        const regex = new RegExp(`(${highlights.join("|")})`, "gi");
        return text.split(regex).map((part, i) =>
            highlights.includes(part.toLowerCase()) ? (
                <span key={i} className="highlight">
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    return (
        <div className="text-block">
            <div className="title-container">
                <div className="line"></div>
                <h2 className="title">{title}</h2>
                <div className="line"></div>
            </div>
            {paragraphs.map((paragraph, index) => (
                <p key={index} className="text">
                    {highlightText(paragraph, highlights)}
                </p>
            ))}
        </div>
    );
};

export default TextBlock;
