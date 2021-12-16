import React from 'react'
import { Label } from 'semantic-ui-react'

export default function IsApprovedIcon(props) {
    return (
        <div>
            <span>
                {
                    props.isActive
                        ? <Label color="green">Aktif</Label>
                        : <Label color="red">Pasif</Label>
                }
            </span>
        </div>
    )
}
