import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Dropdown, Menu } from 'semantic-ui-react'
export default function HomeNavbar() {
    return (
        <div>
            <Menu size='tiny'>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Button primary as={NavLink} to="/auth/login">Sign İn</Button>
                    </Menu.Item>

                    <Menu.Item>
                        <Button primary as={NavLink} to="/auth/jobseeker-register">Sign Up</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
}
