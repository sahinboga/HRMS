import React, { useEffect, useState } from 'react'
import { Table } from 'semantic-ui-react'
import PageHeader from '../../components/PageHeader'
import LanguageService from '../../services/languageService'

export default function LanguageList() {

    const [languages, setLanguages] = useState([])

    useEffect(() => {
        let languageService= new LanguageService()
        languageService.getLanguage().then(result=>setLanguages(result.data.data))
    })
    return (
        <div>
            <PageHeader header="Diller"/>
             <div >
                <Table celled selectable inverted color="teal">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>Dil</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            languages.map(language => (
                                <Table.Row>
                                    <Table.Cell>{language.languageId}</Table.Cell>
                                    <Table.Cell>{language.languageName}</Table.Cell>
                                </Table.Row>
                            ))
                        }

                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}
