import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, Table } from 'semantic-ui-react'
import PageHeader from '../../components/PageHeader'
import { deleteSchools } from '../../store/actions/schoolActions'
import { DeleteAlert } from '../../utils/customs/SBAlert'
import AddModal from '../../utils/modals/AddModal'
import SchoolAdd from './SchoolAdd'

export default function SchoolList() {

    const schools= useSelector(state=>state.schools)
    const dispatch = useDispatch()

    const deleteSchoolsClick=(schoolId)=>{
        DeleteAlert("Okul",()=>dispatch(deleteSchools(schoolId)))
    }
    return (
        <div>
            <PageHeader header="Okullar"/>
            <div className="d-flex justify-content-end mb-2">
                <AddModal header="Okul" trigger={<Button icon="plus" content="Okul ekle" color="green"/>}>
                    <SchoolAdd/>
                </AddModal>
            </div>
            <div >
                <Table celled selectable inverted color="teal">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>Okul</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            schools.data.map(school => (
                                <Table.Row>
                                    <Table.Cell>{school.schoolId}</Table.Cell>
                                    <Table.Cell>{school.schoolName}</Table.Cell>
                                    
                                    <Table.Cell textAlign="right">
                                        <Button icon="trash" color="red" onClick={()=>deleteSchoolsClick(school.schoolId)}/>
                                    </Table.Cell>
                                   
                                </Table.Row>
                            ))
                        }

                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}
