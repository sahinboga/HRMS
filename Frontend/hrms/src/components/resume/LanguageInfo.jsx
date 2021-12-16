import { Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from "yup";
import { Button, Form, Icon, Rating } from 'semantic-ui-react'
import LanguageService from '../../services/languageService'
import LanguageDropdown from '../dropdowns/LanguageDropdown'
import LevelDropdown from '../dropdowns/LevelDropdown'
import MessageBox from '../MessageBox'
import InfoMessage from './InfoMessage'
import { addLanguage, deleteLanguage, updateLanguage } from '../../store/actions/resumeActions';
import { DeleteAlert } from '../../utils/customs/SBAlert';

export default function LanguageInfo() {

    const { data: { resumeId, userLanguages } } = useSelector(state => state.resume)
    const [languages, setLanguages] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [isNew, setIsNew] = useState(false)
    const dispatch = useDispatch()
    const [initialValues, setInitialValues] = useState(
        {
            resume: { resumeId: resumeId },
            language: { languageId: "" },
            level: ""
        }
    )

    useEffect(() => {
        let languageService = new LanguageService()
        languageService.getLanguage().then(result => setLanguages(result.data.data))
    }, [])

    useEffect(() => {

    }, [isEdit])

    const schema = Yup.object().shape({
        language: Yup.object().shape({
            languageId: Yup.number().required("Bu alan zorunlu!")
        }),

        level: Yup.number().required("Bu alan zorunlu!")
    });

    const handleEditClick = (id) => {
        setIsEdit(true)
        setIsNew(false)
        setInitialValues({
            ...initialValues,
            ...userLanguages.find(v => v.userLanguageid == id)
        })
    }
    const handleSaveClick = () => {
        setIsEdit(false)
    }
    const handleCancelEdit = () => {
        setIsEdit(false)
    }

    const handleAddClick = () => {
        setIsEdit(true)
        setIsNew(true)
        setInitialValues({
            ...initialValues,
            language: { languageId: "" },
            level: ""
        })
    }
    const handleDeleteClick = (id) => {
        setIsEdit(false)
        setIsNew(false)
        DeleteAlert("Dil", () => dispatch(deleteLanguage(id)))
    }
    return (
        <div className="py-4">
            <MessageBox>
                <div>
                    Yabancı Dil
                    <span className="px-2">
                        <button className="btn-added" onClick={() => handleAddClick()}>
                            <Icon name="add" /> Yeni dil ekle
                        </button>
                    </span>
                </div>
                <div>
                    {
                        isEdit
                            ? <div>
                                <Formik
                                    initialValues={initialValues}
                                    onSubmit={
                                        (values) => {
                                            values = { ...values, resume: { resumeId: resumeId } }
                                            console.log(values)
                                            if (isNew) {
                                                dispatch(addLanguage(values))
                                            }
                                            else {

                                                dispatch(updateLanguage(values))
                                            }
                                        }
                                    }
                                >
                                    {
                                        props => (
                                            <Form>
                                                <Form.Group>
                                                    <LanguageDropdown name="language.languageId" defaultValue={props.values.language.languageId} />
                                                    <LevelDropdown name="level" defaultValue={props.values.level} />
                                                </Form.Group>
                                                <div className="d-flex justify-content-between">
                                                    <div className="my-2">
                                                        <Button type="submit" positive onClick={() => props.submitForm(handleSaveClick())}>Kaydet</Button>
                                                        <Button negative onClick={() => handleCancelEdit()}>Vazgeç</Button>

                                                    </div>
                                                    {
                                                        !isNew
                                                            ?
                                                            <div>
                                                                <Button negative type="button" onClick={() => handleDeleteClick(props.values.userLanguageid)}>Sil</Button>
                                                            </div>
                                                            : null
                                                    }
                                                </div>

                                            </Form>
                                        )

                                    }
                                </Formik>

                            </div>
                            : <div>
                                {
                                    userLanguages?.map(language => (
                                        <div key={language.userLanguageid}>
                                            <div className="row message-content" onClick={() => handleEditClick(language.userLanguageid)}>

                                                <div className="col-md-8 info-content">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <InfoMessage header="Dil" text={language.language.languageName} />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <InfoMessage header="Seviye" text={<StarLevel level={language.level} />} />

                                                        </div>

                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    ))

                                }


                            </div>
                    }
                </div>
            </MessageBox>
        </div>
    )
}

const StarLevel = ({ level }) => {
    const star = [1, 2, 3, 4, 5]
    return (

        <div>
            {
                star.map((s, index) => (
                    <Icon name="favorite" color={s <= level ? "yellow" : "grey"} key={index} />
                ))
            }
        </div>
    )
}
