
import { Formik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Button, Form } from 'semantic-ui-react';
import * as Yup from "yup";
import { addSkills } from '../../store/actions/SkillActions';
import SBInput from '../../utils/customs/SBInput';

export default function SkillAdd() {

    const initialValues={skillName:""}

    const schema=Yup.object().shape({
        skillName:Yup.string().required("Yetenek zorunlu")
    });

     const dispatch = useDispatch()

     const addSkillsSubmit=(values)=>{
         dispatch(addSkills(values))
     }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values) => {
                    addSkillsSubmit(values)
                }}
            >
                {props => (
                    <Form onSubmit={()=>props.submitForm()}>
                            <SBInput name="skillName" placeholder="Yetenek"/>
                            <Button type='submit' icon="plus" content="Ekle" color="green"/>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
