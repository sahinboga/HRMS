import { Formik } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import * as Yup from "yup";
import { Button, Form} from 'semantic-ui-react'
import JobPositionDropdown from '../../components/dropdowns/JobPositionDropdown';
import SectorDropdown from '../../components/dropdowns/SectorDropdown';
import CityDropdown from '../../components/dropdowns/CityDropdown';
import SBInput from '../../utils/customs/SBInput';
import WorkTypeDropdown from '../../components/dropdowns/WorkTypeDropdown';
import RichTextEditor from '../../components/richTextEditor/RichTextEditor';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import JobAdvertisementService from '../../services/jobAdvertismentService';
import { getJobAdvertisementFilterAndPage } from '../../store/actions/jobAdvertisementAction';

export default function UpdateJobAdvert() {
    
    // const jobAdvertisements = useSelector(state => state.jobAdvertisements)
    const [jobAdverts, setJobAdverts] = useState(null)

    const params = useParams()
    const formikRef = useRef(null)
    
    // const dispatch = useDispatch()
    useEffect(() => {
        // const jobAdvert=jobAdvertisements.data.find(ja=>ja.jobAdvertisement.id==params.id)
        const jobService = new JobAdvertisementService()
        jobService.getById(params.id || 0).then(res => {
            setJobAdverts(res.data.data)
            console.log(res.data)
        }).catch(err => console.log(err))
    }, [])


    useEffect(() => {
        if(jobAdverts) {
            formikRef.current?.setValues({...jobAdverts})
        }
    }, [jobAdverts])

    const initialValues = {
        jobPosition: { id: "" },
        companySector: { id: "" },
        city: { cityId: "" },
        workType: { id: "" },
        releaseDate: "",
        deadline: "",
        minSalary: "",
        maxSalary: "",
        maxPerson:"",
        description: ""
    }

    const schema = Yup.object().shape({
        jobPosition: Yup.object().shape({
            id: Yup.number().required("Bu alan zorunlu!")
        }),
        companySector: Yup.object().shape({
            id: Yup.number().required("Bu alan zorunlu!")
        }),
        workType: Yup.object().shape({
            id: Yup.number().required("Bu alan zorunlu!")
        }),
        city: Yup.object().shape({
            cityId: Yup.number().required("Bu alan zorunlu!")
        }),
        releaseDate: Yup.string().required("Bu alan zorunlu!"),
        deadline: Yup.string().required("Bu alan zorunlu!"),
        description: Yup.string().required("Bu alan zorunlu!"),
        minSalary: Yup.string().required("Bu alan zorunlu!"),
        maxSalary: Yup.string().required("Bu alan zorunlu!"),
        maxPerson: Yup.string().required("Bu alan zorunlu!")
    });

    const updateJobAdvertSubmit=()=>{
        //dispatch(UpdateJobAdvert(jobAdvert))
    }
    
    return (
        <div className="bg-light">
            <div className=" w-75 m-auto pt-6">
                <div className="p-5">
                    <Formik
                        innerRef={formikRef}
                        initialValues={
                            initialValues
                        }
                        //validationSchema={schema}
                        onSubmit={(values) => {
                            console.log(values)
                            //updateJobAdvertSubmit(values)
                        }}
                    >
                        {props => (

                            <Form >
                                <Form.Group widths={3}>
                                    <CityDropdown name="city.cityId" defaultValue={props.values.city.cityId}/>
                                    <JobPositionDropdown name="jobPosition.id" defaultValue={props.values.jobPosition.id}/>
                                    <SectorDropdown name="companySector.id" defaultValue={props.values.companySector.id}/>
                                </Form.Group>
                                <Form.Group widths={3}>
                                    <WorkTypeDropdown name="workType.id" defaultValue={props.values.workType.id}/>
                                    <SBInput label="Yay??nlanma Tarihi" name="releaseDate" placeholder="Yay??nlanma Tarihi" type="date" />
                                    <SBInput label="Son Ba??vuru Tarihi" name="deadline" placeholder="Son Ba??vuru Tarihi" type="date" />
                                </Form.Group>
                                <Form.Group widths={3}>
                                    <SBInput label="Minimum Maa??" name="minSalary" placeholder="Minimum Maa??" />
                                    <SBInput label="Maksimum Maa??" name="maxSalary" placeholder="Maksimum Maa??" />
                                    <SBInput label="Eleman Kontenjan??" name="maxPerson" placeholder="Eleman Kontenjan??" />
                                </Form.Group>
                                <Form.Field>
                                    <label className="mt-5 text-left">
                                        L??tfen i?? ilan?? i??in a????klama giriniz
                                    </label>
                                    <RichTextEditor
                                        textValue={(value)=>{
                                                props.setFieldValue(value)
                                                
                                        }}
                                        defaultValue={props.values.description}
                                    />
                                   
                                </Form.Field>
                                <Button color='green' type="submit" className="mt-3" onClick={()=>props.submitForm()}>Kaydet</Button>
                            </Form>
                        )}

                    </Formik>
                </div>
            </div>

        </div>
    )
}
