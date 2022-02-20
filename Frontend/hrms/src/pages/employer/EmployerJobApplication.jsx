import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'semantic-ui-react';
import PageHeader from '../../components/PageHeader';

export default function EmployerJobApplication() {

    const { data: jobAdvertisement } = useSelector(state => state.employerJobApplications)
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
                            jobAdvertisement?.map(ja => (
                                <Table.Row>
                                    <Table.Cell>{ja?.jobPositon?.jobName}</Table.Cell>
                                    <Table.Cell>{ja?.jobSeeker?.firstName}</Table.Cell>
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

