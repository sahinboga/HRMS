import { Formik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import * as Yup from "yup";
import { addSchools } from '../../store/actions/schoolActions';
import SBInput from '../../utils/customs/SBInput';

export default function SchoolAdd() {
    const initialValues={schoolName:""}

    const schema=Yup.object().shape({
        schoolName:Yup.string().required("Okul zorunlu")
    });

     const dispatch = useDispatch()

     const addSchoolsSubmit=(values)=>{
         dispatch(addSchools(values))
     }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    addSchoolsSubmit(values)
                }}
            >
                {props => (
                    <Form onSubmit={()=>props.submitForm()}>
                            <SBInput name="schoolName" placeholder="Okul"/>
                            <Button type='submit' icon="plus" content="Ekle" color="green"/>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
