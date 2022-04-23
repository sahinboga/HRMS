import { Formik } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Button, Dimmer, Form, Loader, Popup, Segment } from 'semantic-ui-react'
import * as Yup from "yup";
import EditBox from '../../components/EditBox'
import MessageBox from '../../components/MessageBox'
import InfoMessage from '../../components/resume/InfoMessage'
import { deleteLogo, updateEmployer, uploadLogo } from '../../store/actions/employerActions';
import { DeleteAlert } from '../../utils/customs/SBAlert';
import SBInput from '../../utils/customs/SBInput'
import Helper from '../../utils/helper';


export default function EmployerProfile() {

    const employers = useSelector(state => state.employers)
    const dispatch = useDispatch()

    const [logo, setLogo] = useState(null)
    const [loading, setLoading] = useState(false)
    const logoInputRef = useRef(null)
    const previewImageRef = useRef(null)
    const formikRef = useRef(null)

    const initialValues = {
        companyName: employers?.data?.companyName,
        email: employers?.data?.user?.email,
        phone: employers?.data?.phone,
        website: employers?.data?.website
    }

    const schema = Yup.object().shape({
        companyName: Yup.string().required("Bu alan zorunlu!"),
        email: Yup.string().required("Bu alan zorunlu!"),
        phone: Yup.string().required("Bu alan zorunlu!"),
        website: Yup.string().required("Bu alan zorunlu!")
    });

    const handleSaveClick = () => {
        setLoading(true)
        formikRef.current.submitForm()
        return formikRef.current.isValid
    }

    const uploadLogoClick = () => {
        const file = logoInputRef.current.files[0]
        previewImageRef.current.src = URL.createObjectURL(file)
        const fileData = new FormData()
        fileData.append("photoFile", file)
        setLogo(fileData)
    }

    const deleteLogoClick=()=>{
        DeleteAlert("Logo",()=>dispatch(deleteLogo()))
    }
    return (
        <div className="">
            <div className="w-75  m-auto pt-6">
                <div className="p-5">
                    <Segment basic>
                        <Dimmer active={loading}>
                            <Loader content="Profiliniz güncelleniyor..." />
                        </Dimmer>
                        <MessageBox>
                            <div>
                                Genel Şirket Bilgileri
                            </div>
                            <div>
                                <EditBox saveClick={() => handleSaveClick()}>
                                    <div>
                                        <Formik
                                            innerRef={formikRef}
                                            initialValues={initialValues}
                                            validationSchema={schema}
                                            onSubmit={(values) => {
                                                Helper.setMyCallBack(() => dispatch(updateEmployer({ ...employers.data, ...values }, logo)))
                                                    .then(result => {
                                                        setLoading(false)
                                                    })
                                                //dispatch(uploadLogo(logo))
                                            }}
                                        >
                                            {
                                                props => (
                                                    <Form>
                                                        <div className="row">
                                                            <div className="col-md-4">
                                                                <div className="profile-photo">
                                                                    <img ref={previewImageRef} className="profile-photo" src={employers?.data?.image?.imagePath ?? "https://rurallure.eu/wordpress/wp-content/uploads/2021/07/defaultpp.jpg"} />
                                                                </div>
                                                                <div className="text-center mt-2">
                                                                    <Popup content='Logo yükle' trigger={<Button positive icon='add' onClick={() => logoInputRef.current.click()} />} />
                                                                    <Popup content='Logoyu sil' trigger={<Button negative icon='trash' onClick={()=>deleteLogoClick()}/>} />
                                                                </div>
                                                                <input
                                                                    ref={logoInputRef}
                                                                    type="file"
                                                                    hidden
                                                                    accept="image/png, image/gif, image/jpeg"
                                                                    onChange={uploadLogoClick}
                                                                />
                                                            </div>
                                                            <div className="col-md-8">
                                                                <Form.Group widths={2}>
                                                                    <SBInput label="Şirket Adı" name="companyName" placeholder="Şirket Adı" />
                                                                    <SBInput label="E-mail" name="email" placeholder="E-mail" />
                                                                </Form.Group>
                                                                <Form.Group widths={2}>
                                                                    <SBInput label="Telefon" name="phone" placeholder="Telfon" />
                                                                    <SBInput label="Website" name="website" placeholder="Website" />
                                                                </Form.Group>
                                                            </div>
                                                        </div>

                                                    </Form>
                                                )
                                            }

                                        </Formik>
                                    </div>
                                    <div className="row ">
                                        <div className="col-md-4">
                                            <div className="profile-photo">
                                                <img ref={previewImageRef} className="profile-photo" src={employers?.data?.image?.imagePath ?? "https://rurallure.eu/wordpress/wp-content/uploads/2021/07/defaultpp.jpg"} />
                                            </div>
                                        </div>
                                        <div className="col-md-8 info-content">
                                            <h2 className="ps-2">{employers?.data?.companyName}</h2>
                                            <div className="row ">
                                                <div className="col-md-6">
                                                    <InfoMessage header="E-posta adresi" text={employers?.data?.user?.email} />
                                                </div>
                                                <div className="col-md-6">
                                                    <InfoMessage header="Telefon" text={employers?.data?.phone} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <InfoMessage header="Website" text={employers?.data?.website} />
                                                </div>
                                                <div className="col-md-6">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </EditBox>
                            </div>
                        </MessageBox>
                    </Segment>
                </div>
            </div>
        </div>

    )
}
