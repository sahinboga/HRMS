import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Icon } from 'semantic-ui-react'
import MessageBox from '../MessageBox'
import InfoMessage from './InfoMessage'
import * as Yup from "yup";
import { addExperience, deleteExperience, updateExperience } from '../../store/actions/resumeActions'
import SBInput from '../../utils/customs/SBInput'
import Helper from '../../utils/helper'
import { Formik } from 'formik'
import { DeleteAlert } from '../../utils/customs/SBAlert'
import JobPositionDropdown from '../dropdowns/JobPositionDropdown'
import CityDropdown from '../dropdowns/CityDropdown'
import SectorDropdown from '../dropdowns/SectorDropdown'
export default function ExperienceInfo() {

    const { data: { resumeId, experiences } } = useSelector(state => state.resume)
    const dispatch = useDispatch()

    const [isEdit, setIsEdit] = useState(false)
    const [isNew, setIsNew] = useState(false)
    const [initialValues, setInitialValues] = useState(
        {   
            resume: { resumeId: resumeId },
            jobPosition: { id: "" },
            companySector: { id: "" },
            city: { cityId: "" },
            companyName: "",
            startingDate: "",
            leavingDate: ""
        }
    )

    useEffect(() => {

    }, [isEdit])

    const schema = Yup.object().shape({
        jobPosition: Yup.object().shape({
            id: Yup.number().required("Bu alan zorunlu!")
        }),
        companySector: Yup.object().shape({
            id: Yup.number().required("Bu alan zorunlu!")
        }),
        companyName: Yup.string().required("Bu alan zorunlu!"),
        city: Yup.object().shape({
            cityId: Yup.number().required("Bu alan zorunlu!")
        }),
        startingDate: Yup.string().required("Bu alan zorunlu!"),
        leavingDate: Yup.string().required("Bu alan zorunlu!")
    });

    
    const handleEditClick = (id) => {
        setIsEdit(true)
        setIsNew(false)
        setInitialValues({
            ...initialValues,
            ...experiences.find(v => v.experinceId == id)
        })

    }

    const handleSaveClick = () => {
        setIsEdit(false)
    }

    const handleCancelEdit=()=>{
        setIsEdit(false)
    }
    const handleAddClick = () => {
        setIsEdit(true)
        setIsNew(true)
        setInitialValues({
            ...initialValues,
            jobPosition: { id: "" },
            companySector: { id: "" },
            city: { cityId: "" },
            companyName: "",
            startingDate: "",
            leavingDate: ""
        })
    }

    const handleDeleteClick = (id) => {
        setIsEdit(false)
        setIsNew(false)
        DeleteAlert("İş deneyimi", () => dispatch(deleteExperience(id)))
    }

    return (
        <div className="py-4">
            <MessageBox>
                <div>
                    İş Deneyimi
                    <span className="px-2">
                        <button className="btn-added" onClick={()=>handleAddClick()}>
                            <Icon name="add" /> Yeni deneyim ekle
                        </button>
                    </span>
                </div>
                <div>
                    {
                        isEdit
                            ? <div>
                                <Formik
                                    initialValues={
                                        initialValues
                                    }
                                    validationSchema={schema}
                                    onSubmit={(values) => {
                                        values={...values,resume:{resumeId:resumeId}}

                                        if(isNew){
                                            dispatch(addExperience(values))
                                        }
                                        else{

                                            dispatch(updateExperience(values))
                                        }
                                    }}
                                >
                                    {props => (

                                        <Form>
                                            <Form.Group widths={3}>
                                                <SBInput label="Şirket" name="companyName" placeholder="Şirket Adı" />
                                                <JobPositionDropdown name="jobPosition.id" defaultValue={props.values.jobPosition.id} />
                                                <SectorDropdown name="companySector.id" defaultValue={props.values.companySector.id} />
                                            </Form.Group>
                                            <Form.Group widths={3}>
                                                <SBInput label="Başlama Tarihi" name="startingDate" placeholder="Başlama Tarihi" type="month" />
                                                <SBInput label="Bitiş Tarihi" name="leavingDate" placeholder="Bitiş Tarihi" type="month" />
                                                <CityDropdown name="city.cityId" defaultValue={props.values.city.cityId} />
                                            </Form.Group>
                                            <div className="d-flex justify-content-between">
                                                <div className="my-2">
                                                    <Button type="submit" positive onClick={() =>props.submitForm(handleSaveClick())}>Kaydet</Button>
                                                    <Button negative onClick={() => handleCancelEdit()}>Vazgeç</Button>
                                                </div>
                                                {
                                                    !isNew
                                                        ?
                                                        <div>
                                                            <Button negative type="button" onClick={() => handleDeleteClick(props.values.experienceId)}>Sil</Button>
                                                        </div>
                                                        : null
                                                }
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                            :
                            <div>
                                {
                                    experiences?.map(exp => (
                                        <div key={exp.experienceId}>
                                            <div className="row message-content" onClick={()=>handleEditClick(exp.experinceId)}>
                                                <div className="col-md-4">
                                                    <div className="logo">
                                                        <img src="https://aday-asset.mncdn.com/img/firma-logosuz.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-8 info-content">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <InfoMessage header="İş pozisyonu" text={exp?.jobPosition?.jobName} />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <InfoMessage header="Firma Adı" text={exp?.companyName} />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <InfoMessage header="Firma Sektörü" text={exp?.companySector?.name} />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <InfoMessage header="Şehir" text={exp?.city?.cityName} />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <InfoMessage header="Başlangıç Tarihi" text={Helper.OnlyYearAndMonth(exp?.startingDate)} />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <InfoMessage header="Bitiş Tarihi" text={Helper.OnlyYearAndMonth(exp?.leavingDate)} />
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
