import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Button, Table } from 'semantic-ui-react'
import PageHeader from '../../components/PageHeader'
import { deleteSectors } from '../../store/actions/companySectorActions'
import { DeleteAlert } from '../../utils/customs/SBAlert'
import AddModal from '../../utils/modals/AddModal'
import CompanySectorAdd from './CompanySectorAdd'

export default function CompanySectorList() {

    const companySectors = useSelector(state => state.companySectors)
    const dispatch = useDispatch()

    const deleteSectorClick=(id)=>{
        DeleteAlert("Sektör",()=>dispatch(deleteSectors(id)))
    }
    return (
        <div>
            <PageHeader header="Şirket Sektörleri" />
            <div className="d-flex justify-content-end mb-2">
                <AddModal header="Sektör" trigger={<Button icon="plus" content="Sektör ekle" color="green"/>}>
                    <CompanySectorAdd/>
                </AddModal>
            </div>
            <div >
                <Table celled selectable inverted color="teal">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>#</Table.HeaderCell>
                            <Table.HeaderCell>Sektör</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            companySectors.data.map(sector => (
                                <Table.Row>
                                    <Table.Cell>{sector.id}</Table.Cell>
                                    <Table.Cell>{sector.name}</Table.Cell>
                                    <Table.Cell textAlign="right">
                                        <Button icon="trash" color="red" onClick={()=>deleteSectorClick(sector.id)}/>
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
