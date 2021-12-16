import { Formik } from 'formik'
import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Button, Dimmer, Form, Label, Loader, Popup, Segment } from 'semantic-ui-react'
import { deletePhoto, updateResume, uploadPhoto } from '../../store/actions/resumeActions'
import SBInput from '../../utils/customs/SBInput'
import EditBox from '../EditBox'
import MessageBox from '../MessageBox'
import InfoMessage from './InfoMessage'
import * as Yup from "yup";
import Helper from '../../utils/helper'
import { DeleteAlert } from '../../utils/customs/SBAlert'

export default function PersonelInfo() {

    const resume = useSelector(state => state.resume)

    const dispatch = useDispatch()

    const [photo, setPhoto] = useState(null)
    const [photoPreview, setPhotoPreview] = useState(null)
    const [loading, setLoading] = useState(false)
    const photoInputRef = useRef(null)
    const previewImageRef = useRef(null)
    const formikRef = useRef(null)

    const initialValues = {
        birthDate: resume.data.birthDate,
        phone: resume.data.phone,
        github: resume.data.github,
        linkedin: resume.data.linkedin,
        adress: resume.data.adress
    }

    const schema = Yup.object().shape({
        birthDate: Yup.date().required("Bu alan zorunlu!"),
        phone: Yup.string().required("Bu alan zorunlu!"),
        github: Yup.string().required("Bu alan zorunlu!"),
        linkedin: Yup.string().required("Bu alan zorunlu!"),
        adress: Yup.string().required("Bu alan zorunlu!")
    });

    const handleSaveClick = () => {
        setLoading(true)
        formikRef.current.submitForm()
        return formikRef.current.isValid
    }

    const uploadPhotoClick = () => {
        const file = photoInputRef.current.files[0]
        previewImageRef.current.src = URL.createObjectURL(file)
        const fileData = new FormData()
        fileData.append("photoFile", file)
        setPhoto(fileData)
    }

    const deletePhotoClick=()=>{
        DeleteAlert("Fotoğraf",()=>dispatch(deletePhoto()))
    }
    return (
        <div className="py-4">

            <Segment basic>
                <Dimmer active={loading}>
                    <Loader content="Profiliniz güncelleniyor..."/>
                </Dimmer>
                <MessageBox>
                    <div>
                        Kişisel Bilgiler
                    </div>
                    <EditBox saveClick={() => handleSaveClick()}>
                        <div>
                            <Formik
                                innerRef={formikRef}
                                initialValues={initialValues}
                                validationSchema={schema}
                                onSubmit={(values) => {
                                    Helper.setMyCallBack(()=>dispatch(updateResume({ ...resume.data, ...values }, photo)))
                                        .then(result=>{
                                            setLoading(false)
                                        })
                                    //dispatch(uploadPhoto(photo))
                                }}
                            >
                                {props => (
                                    <Form>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="profile-photo">

                                                    <img ref={previewImageRef} className="profile-photo" src={resume?.data?.image?.imagePath ?? "https://rurallure.eu/wordpress/wp-content/uploads/2021/07/defaultpp.jpg"} />
                                                </div>
                                                <div className="text-center mt-2">

                                                    <Popup content='Fotoğraf yükle' trigger={<Button positive icon='add' onClick={() => photoInputRef.current.click()} />} />
                                                    <Popup content='Fotoğrafı sil' trigger={<Button negative icon='trash' onClick={()=>deletePhotoClick()}/>} />
                                                </div>
                                                <input
                                                    ref={photoInputRef}
                                                    type="file"
                                                    hidden
                                                    accept="image/png, image/gif, image/jpeg"
                                                    onChange={uploadPhotoClick}
                                                />
                                            </div>
                                            <div className="col-md-8">
                                                <Form.Group widths={2}>
                                                    <SBInput label="Doğum Tarihi" name="birthDate" placeholder="Doğum Tarihi" type="date" />
                                                    <SBInput label="Telefon" name="phone" placeholder="Telefon" />
                                                </Form.Group>
                                                <Form.Group widths={2}>
                                                    <SBInput label="Github Link" name="github" placeholder="Github Link" />
                                                    <SBInput label="Linkedin" name="linkedin" placeholder="Linkedin" />
                                                </Form.Group>
                                                <SBInput label="Adres" name="adress" placeholder="Adres" />
                                            </div>
                                        </div>

                                    </Form>
                                )}
                            </Formik>
                        </div>
                        <div>

                            <div className="row " >
                                <div className="col-md-4 my-3">

                                    <div className="profile-photo">
                                        <img className="profile-photo" src={resume?.data?.image?.imagePath ?? "https://rurallure.eu/wordpress/wp-content/uploads/2021/07/defaultpp.jpg"} />
                                    </div>
                                </div>
                                <div className="col-md-8 info-content">
                                    <h2 className="ps-2">{resume?.data?.jobSeeker?.firstName} {resume?.data?.jobSeeker?.lastName}</h2>
                                    <div className="row ">
                                        <div className="col-md-6">
                                            <InfoMessage header="E-posta adresi" text={resume?.data?.jobSeeker?.user.email} />
                                        </div>
                                        <div className="col-md-6">
                                            <InfoMessage header="Doğum Tarihi" text={Helper.DateEditing(resume?.data?.birthDate)} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <InfoMessage header="Adres" text={resume?.data?.adress} />
                                        </div>
                                        <div className="col-md-6">
                                            <InfoMessage header="Telefon" text={resume?.data?.phone} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <InfoMessage header="Linkedin Hesabı" text={resume?.data?.linkedin} />
                                        </div>
                                        <div className="col-md-6">
                                            <InfoMessage header="Github Hesabı" text={resume?.data?.github} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </EditBox>
                </MessageBox>
            </Segment>
        </div>
    )
}



