import React from 'react'

function Brand({ className, style = {}, bold = false, block, Type = "h1" }) {

    const baseStyle = {
        color: "#ffffff",
        fontWeight: bold ? 500 : 300,
        userSelect: "none",
        display: block ? "block" : "inline",
    }

    const kodStyle = {
        color: "rgb(17 255 233)",
        borderRadius: "5px",
        padding: "0px 8px",
    }

    return (
        <Type className={className} style={{ ...baseStyle, ...style }}>
            <span style={kodStyle}>
                Kariyerim.Net
            </span>
            
        </Type>
    )
}

export default React.memo(Brand)