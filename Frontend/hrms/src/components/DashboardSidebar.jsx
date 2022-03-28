import React from 'react'
import { ButtonGroup } from 'semantic-ui-react'

export default function DashboardSidebar(props) {
    return (
        <div className="dashboard_sidebar">
            <ButtonGroup className="text-left" vertical >
                {props.children}
            </ButtonGroup>
        </div>
    )
}
