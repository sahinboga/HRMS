import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Button, Form, Icon, Label } from 'semantic-ui-react'
import SkillService from '../../services/skillService'
import {updateSkill} from '../../store/actions/resumeActions'
import MessageBox from '../MessageBox'

export default function SkillInfo() {

    const { data: { resumeId, skills } } = useSelector(state => state.resume)
    const [isEdit, setIsEdit] = useState(false)
    const [allSkills, setAllSkills] = useState([])

    const dispatch = useDispatch()
    useEffect(() => {
        let skillService = new SkillService()
        skillService.getSkill().then(result => {
            setAllSkills(result.data.data)
        })
    }, [])

    useEffect(() => {

    }, [isEdit])

    const handleEditClick = () => {
        setIsEdit(true)
    }

    const handleSaveClick = () => {
        setIsEdit(false)
    }
    const handleCancelEdit = () => {
        setIsEdit(false)
    }
    return (
        <div className="py-4">
            <MessageBox>
                <div>
                    Yetenekler
                    <span className="px-2">
                        <button className="btn-added" onClick={() => handleEditClick()}>
                            <Icon name="add" /> Güncelle
                        </button>
                    </span>
                </div>
                <div>
                    <div>
                        {
                            isEdit
                                ? <div>
                                    <Formik
                                        initialValues={{skillIds:[]}}
                                        onSubmit={values=>{
                                            values={...values,resumeId:resumeId}
                                            console.log(values)
                                            dispatch(updateSkill(values))
                                        }}
                                    >
                                        {
                                            props => (
                                                <Form>
                                                    <Form.Dropdown
                                                        placeholder='Yetenekler'
                                                        fluid
                                                        multiple
                                                        search
                                                        selection
                                                        renderLabel={(label) => ({
                                                            color: 'teal',
                                                            content: label.text
                                                          })}
                                                        defaultValue={skills?.map(v=>{return v.skill.skillId})}
                                                        onChange= {(event, data) => props.setFieldValue("skillIds", data.value)}
                                                        options={allSkills.map((v, i) => { return { key: i, text: v.skillName, value: v.skillId } })}
                                                    />
                                                    <div className="my-2">
                                                        <Button type="submit" positive onClick={() => props.submitForm(handleSaveClick())}>Kaydet</Button>
                                                        <Button negative onClick={() => handleCancelEdit()}>Vazgeç</Button>
                                                    </div>
                                                </Form>
                                            )
                                        }

                                    </Formik>

                                </div>
                                :
                                <div className="message-content p-2" onClick={() => handleEditClick()}>

                                    {
                                        skills?.map(skill => (
                                            <span className="px-1" key={skill.skill.skillId}>
                                                <Label color="teal" content={skill.skill.skillName} />

                                            </span>
                                        ))
                                    }
                                </div>
                        }
                    </div>

                </div>
            </MessageBox>
        </div>
    )
}
