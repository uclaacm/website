import React from 'react';

function Tag(props) {
    const tagStyle = {
        color: "#1E6CFF",
        fontSize: "0.8em",
        border: "1px solid #1E6CFF",
        borderRadius: "8px",
        display: "inline-block",
        padding: "2px 10px",
    };
    return (
        <div style={tagStyle}>{props.name}</div>
    );
}

export default Tag;