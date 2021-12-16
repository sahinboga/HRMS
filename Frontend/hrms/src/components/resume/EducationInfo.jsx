import { Formik } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Form, Icon } from 'semantic-ui-react'
import * as Yup from "yup";
import SBInput from '../../utils/customs/SBInput'

import MessageBox from '../MessageBox'
import InfoMessage from './InfoMessage'
import SchoolDropdown from '../dropdowns/SchoolDropdown';
import SchoolTypeDropdown from '../dropdowns/SchoolTypeDropdown';
import DepartmentDropdown from '../dropdowns/DepartmentDropdown';
import { addEducation, deleteEducation, updateEducation } from '../../store/actions/resumeActions';
import { DeleteAlert } from '../../utils/customs/SBAlert';
import NumberDropdown from '../../utils/customs/dropdowns/NumberDropdown';

export default function EducationInfo() {

    const { data: { resumeId,educations } } = useSelector(state => state.resume)
    const dispatch = useDispatch()

    const [isEdit, setIsEdit] = useState(false)
    const [isNew, setIsNew] = useState(false)
    const [initialValues, setInitialValues] = useState(
        {
            resume:{resumeId:resumeId},
            school: { schoolId: "" },
            department: { departmentId: "" },
            schoolType: "",
            startingDate: "",
            graduationDate: ""
        }
    )

    useEffect(() => {

    }, [isEdit])


    const schema = Yup.object().shape({
        school: Yup.object().shape({
            schoolId: Yup.number().required("Bu alan zorunlu!")
        }),
        department: Yup.object().shape({
            departmentId: Yup.number().required("Bu alan zorunlu!")
        }),
        schoolType: Yup.string().required("Bu alan zorunlu!"),
        startingDate: Yup.number().required("Bu alan zorunlu!"),
        graduationDate: Yup.number().required("Bu alan zorunlu!")
    });

    const handleEditClick = (id) => {
        setIsEdit(true)
        setIsNew(false)
        setInitialValues({
            ...initialValues,
            ...educations.find(v => v.educationId == id)
        })

    }

    const handleSaveClick = () => {
        setIsEdit(false)
        
    }

    const handleCancelEdit = () => {
        setIsEdit(false)
        //setIsNew(false)
    }

    const handleAddClick=()=>{
        setIsEdit(true)
        setIsNew(true)
        setInitialValues(
            {
                ...initialValues,
                school: { schoolId: "" },
                department: { departmentId: "" },
                schoolType: "",
                startingDate: "",
                graduationDate: ""
            }
        )
    }

    const handleDeleteClick=(id)=>{
        setIsEdit(false)
        setIsNew(false)
        DeleteAlert("Eğitim",()=>dispatch(deleteEducation(id)))
    }
    return (
        <div className="py-4">
            <MessageBox>
                <div>
                    Eğitim Bilgileri
                    <span className="px-2">
                        <button className="btn-added" onClick={()=>handleAddClick()}>
                            <Icon name="add" /> Yeni eğitim bilgisi ekle
                        </button>
                    </span>
                </div>
                <div>
                    {
                        isEdit
                            ?
                            <div>
                                <Formik
                                    validationSchema={schema}
                                    initialValues={initialValues}

                                    onSubmit={(values) => {
                                        values={...values,resume:{resumeId:resumeId}}
                                        //console.log(values)
                                        if(isNew){
                                            dispatch(addEducation(values))
                                        }
                                        else{

                                            dispatch(updateEducation(values))
                                        }
                                    }}

                                >
                                    {props => (

                                        <Form >
                                            <Form.Group widths={3}>
                                                <SchoolDropdown name="school.schoolId" defaultValue={props.values.school.schoolId} />
                                                <DepartmentDropdown name="department.departmentId" defaultValue={props.values.department.departmentId} />
                                                <SchoolTypeDropdown name="schoolType" defaultValue={props.values.schoolType} />
                                            </Form.Group>
                                            <Form.Group widths={3}>
                                                {/* <SBInput label="Başlama Tarihi" name="startingDate" placeholder="Başlama Tarihi" type="year" />
                                                <SBInput label="Bitiş Tarihi" name="graduationDate" placeholder="Bitiş Tarihi" type="year" /> */}
                                                <NumberDropdown label="Başlama tarihi" name="startingDate" onChangeEvent={(e, data) => props.setFieldValue("startingDate", data.value)} min={1950} max={2022} value={props.values?.startingDate}/>
                                                <NumberDropdown label="Mezuniyet tarihi" name="graduationDate" onChangeEvent={(e, data) => props.setFieldValue("graduationDate", data.value)} min={1950} max={2022} value={props.values?.graduationDate}/>
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
                                                            <Button negative type="button" onClick={() => handleDeleteClick(props.values.educationId)}>Sil</Button>
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
                                    educations?.map(edu => (
                                        <div key={edu.educationId}>
                                            <div className="row message-content" onClick={() => handleEditClick(edu.educationId)}>
                                                <div className="col-md-4">
                                                    <div className="education-logo">
                                                        <img className="education-logo" src="https://i.pinimg.com/736x/54/26/4a/54264a84e2f96cb7a5c32efa99b4714d.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-8 info-content">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <InfoMessage header="Üniversite" text={edu?.school?.schoolName} />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <InfoMessage header="Fakülte" text={edu?.department?.departmentName} />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <InfoMessage header="Eğitim Durumu" text={edu?.schoolType} />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <InfoMessage header="Başlangıç Tarihi" text={edu?.startingDate} />
                                                        </div>
                                                        <div className="col-md-4">
                                                            <InfoMessage header="Bitiş Tarihi" text={edu?.graduationDate==3000?'Okuyor':edu?.graduationDate} />
                                                        </div>
                                                        <div className="col-md-4">

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

