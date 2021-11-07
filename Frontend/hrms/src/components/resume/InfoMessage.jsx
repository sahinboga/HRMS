import React from 'react'

export default function InfoMessage({ header, text }) {
    return (
        <div>
            <span className="info-msg-header">
                {header}
            </span>
            <span className="info-msg-text">
                {text}
            </span>
        </div>
    )
}
