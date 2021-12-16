import { useField } from 'formik'
import React from 'react'
import { Form, Label } from 'semantic-ui-react'

export default function SBInput({...props}) {
    const [field,meta] = useField(props)
    return (
        <Form.Field error={meta.touched && !!meta.error}>
            {!!props.label&&(<label>{props.label}</label>)}
           <input {...field} {...props} />
           {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error}></Label>
           ):null}
        </Form.Field>
    )
}
