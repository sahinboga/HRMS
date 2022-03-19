import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Table } from 'semantic-ui-react';
import PageHeader from '../../components/PageHeader';
import JobApplicationService from '../../services/jobApplicationService';

export default function EmployerJobApplication() {

    const [incomingApplication, setIncomingApplication] = useState([])
    const {jobAdvertId}=useParams()

    useEffect(() => {
      let jobApplicationService=new JobApplicationService()
      jobApplicationService.getAllByEmployerJobApplication(9).then(result=>setIncomingApplication(result.data.data))
    }, [])
    console.log(incomingApplication)
    return (
        <div>
            <PageHeader header="Gelen Başvurular" />
            <div className='w-75 m-auto'>
                <Table celled selectable inverted color="teal">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
                            <Table.HeaderCell>Başvuran</Table.HeaderCell>
                            <Table.HeaderCell>Başvuran E-posta</Table.HeaderCell>
                            <Table.HeaderCell>Başvuru Durumu</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>

                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            incomingApplication?.map(ja => (
                                <Table.Row>
                                    <Table.Cell>{ja?.jobAdvertisement?.jobPosition?.jobName}</Table.Cell>
                                    <Table.Cell>{ja?.jobSeeker?.firstName} {ja?.jobSeeker?.lastName}</Table.Cell>
                                    <Table.Cell>{ja?.jobSeeker?.user?.email}</Table.Cell>
                                    <Table.Cell textAlign="right">
                                        
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

