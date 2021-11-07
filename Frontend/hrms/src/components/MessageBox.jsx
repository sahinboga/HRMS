import React from 'react'

export default function MessageBox(props) {
    return (
        <div className="">
            <div className="content-header">
                <h3 className="title">
                    {props.children[0]}
                </h3>
            </div>
            <div className="content-body">
                <div className="container">
                    {props.children[1]}
                </div>
            </div>
        </div>
    )
}
