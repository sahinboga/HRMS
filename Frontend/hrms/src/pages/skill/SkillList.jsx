
import React from 'react'
import { Button, Table } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import PageHeader from '../../components/PageHeader'
import { DeleteAlert } from '../../utils/customs/SBAlert'
import { deleteSkills } from '../../store/actions/SkillActions'
import SkillAdd from './SkillAdd'
import AddModal from '../../utils/modals/AddModal'

export default function SkillList() {

    const skills= useSelector(state=>state.skills)
    const dispatch = useDispatch()

    const deleteSkillsClick=(skillId)=>{
        DeleteAlert("Yetenek",()=>dispatch(deleteSkills(skillId)))
    }
    return (
        <div>
            <PageHeader header="Yetenekler"/>
            <div className="d-flex justify-content-end mb-2">
                <AddModal header="Yetenek" trigger={<Button icon="plus" content="Yetenek ekle" color="green"/>}>
                    <SkillAdd/>
                </AddModal>
            </div>
             <div >
                <Table celled selectable inverted color="teal">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>Yetenek</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {
                            skills.data.map(skill => (
                                <Table.Row>
                                    <Table.Cell>{skill.skillId}</Table.Cell>
                                    <Table.Cell>{skill.skillName}</Table.Cell>
                                    <Table.Cell textAlign="right">
                                        <Button icon="trash" color="red" onClick={()=>deleteSkillsClick(skill.skillId)}/>
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
