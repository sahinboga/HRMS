import { Formik } from 'formik';
import React from 'react'
import * as Yup from "yup";
import { Button, Form } from 'semantic-ui-react';
import { addSectors } from '../../store/actions/companySectorActions';
import SBInput from '../../utils/customs/SBInput';
import { useDispatch } from 'react-redux';

export default function CompanySectorAdd() {
    const initialValues = { name: "" };

    const schema = Yup.object().shape({
        name: Yup.string().required("Sektör Zorunlu")
    });


    const dispatch = useDispatch()

    const addSectorSubmit = (values) => {
        dispatch(addSectors(values))
        
    }
    return (
        <div>

            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    addSectorSubmit(values)
                }}
            >
                {props => (
                    <Form onSubmit={()=>props.submitForm()}>
                            <SBInput name="name" placeholder="Sektör"/>
                            <Button type='submit' icon="plus" content="Ekle" color="green"/>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
