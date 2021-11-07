import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Button, Table } from 'semantic-ui-react'
import Swal from 'sweetalert2'
import PageHeader from '../../components/PageHeader'
import { deleteJobPositions } from '../../store/actions/jobPositionActions'
import { DeleteAlert } from '../../utils/customs/SBAlert'
import AddModal from '../../utils/modals/AddModal'
import JobPositionAdd from './JobPositionAdd'

export default function JobPositionList() {
    const jobPositions = useSelector(state => state.jobPositions)
    const dispatch = useDispatch()
    const deleteJobPositionClick=(id)=>{
       DeleteAlert("İş Pozisyonu",()=>dispatch(deleteJobPositions(id)))
       
    }
    return (
        <div>
            <PageHeader header="İş Pozisyonları" />
            <div className="d-flex justify-content-end mb-2">
                <AddModal header="İş Pozisyonu" trigger={<Button icon="plus" content="İş pozisyonu ekle" color="green"/>}>
                    <JobPositionAdd/>
                </AddModal>
            </div>
            <div >
                <Table celled selectable inverted color="teal">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            jobPositions.data.map(jobPositon => (
                                <Table.Row>
                                    <Table.Cell>{jobPositon.id}</Table.Cell>
                                    <Table.Cell>{jobPositon.jobName}</Table.Cell>
                                    <Table.Cell textAlign="right">
                                        <Button icon="trash" color="red" onClick={()=>deleteJobPositionClick(jobPositon.id)}/>
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
