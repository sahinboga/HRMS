import React, { useState } from 'react'
import { Checkbox, Menu } from 'semantic-ui-react'

export default function SBCheckboxGroup({ data,trigger, className }) {

    const [checkeds, setCheckeds] = useState([])

    const handleChange = (e, { value, checked }) => {
        if (checked) {
            checkeds.push(value)
        }
        else {  
            let id = checkeds.indexOf(value)
            if (id > -1) {
                checkeds.splice(id, 1)
            }
        }
        trigger(checkeds)
    }
    return (
        <Menu vertical className={"w-100 my-0 f-12 scrolling " + className}>
            {
                data.map(d => (
                    <Menu.Item>
                        <Checkbox label={d.label} onChange={handleChange} value={d.value} />
                    </Menu.Item>
                ))

            }
        </Menu>
    )
}
