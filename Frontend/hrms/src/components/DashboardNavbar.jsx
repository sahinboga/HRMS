import React from 'react'

export default function DashboardNavbar(props) {
    return (
        <div>
            <div className="dashboard_navbar">
                <div className='dashboard_navbar_main'>
                    <div className="dashboard_logo">
                        <h2>Kariyerim.Net</h2>
                    </div>
                    <div className="dashboard_top_items">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}
