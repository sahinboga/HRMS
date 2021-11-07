import React from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'
export default function HomeNavbar() {
    return (
        <div>
            <Menu size='tiny'>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Button primary>Sign İn</Button>
                    </Menu.Item>

                    <Menu.Item>
                        <Button primary>Sign Up</Button>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        </div>
    )
}
