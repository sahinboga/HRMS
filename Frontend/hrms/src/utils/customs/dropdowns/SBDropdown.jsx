import { useField } from 'formik'
import React, { useEffect } from 'react'
import { Form } from 'semantic-ui-react'

export default function SBDropdown({...props}) {
    const [field, meta, helpers] = useField(props.name)
    return (
        <Form.Dropdown
            selection
            onChange={(event, data) => helpers.setValue(data.value)}
            error={!!meta.error}
            {...props}
        />
    )
}
