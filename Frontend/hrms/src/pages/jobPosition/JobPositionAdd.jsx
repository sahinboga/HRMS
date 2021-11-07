import { Formik } from 'formik';
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import * as Yup from "yup";
import { addJobPositions } from '../../store/actions/jobPositionActions';
import SBInput from '../../utils/customs/SBInput';
export default function JobPositionAdd() {

    const initialValues = { jobName: "" };

    const schema = Yup.object().shape({
        jobName: Yup.string().required("İş Pozisyonu Zorunlu")
    });


    const dispatch = useDispatch()

    const addJobPositionSubmit = (values) => {
        dispatch(addJobPositions(values))
        
    }
    return (
        <div>

            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    addJobPositionSubmit(values)
                }}
            >
                {props => (
                    <Form onSubmit={()=>props.submitForm()}>
                            <SBInput name="jobName" placeholder="İş pozisyonu"/>
                            <Button type='submit' icon="plus" content="Ekle" color="green"/>
                    </Form>
                )}
            </Formik>
        </div>
    )
}