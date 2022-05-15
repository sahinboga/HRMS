
import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'semantic-ui-react'
import PageHeader from '../../components/PageHeader'



export default function CityList() {

    const cities = useSelector(state => state.cities)
    return (
        <div>
            <PageHeader header="Şehirler"/>
             <div >
                <Table celled selectable inverted color="teal">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>#</Table.HeaderCell>
                            <Table.HeaderCell>Şehir</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            cities.data.map(city => (
                                <Table.Row>
                                    <Table.Cell>{city.cityId}</Table.Cell>
                                    <Table.Cell>{city.cityName}</Table.Cell>
                                </Table.Row>
                            ))
                        }

                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}
