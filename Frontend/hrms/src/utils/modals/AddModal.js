import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default function AddModal({header, icon, trigger, children}) {
    const [open, setOpen] = React.useState(false)

    return (
        <div>
            <Modal
                size="tiny"
                centered
                closeIcon
                open={open}
                trigger={trigger}
                onOpen={() => setOpen(true)}
            >
                <Header icon={icon} content={header} />
                <Modal.Content>
                    {children}
                </Modal.Content>
                <Modal.Actions>
                    <Button color='red' onClick={() => setOpen(false)}>
                        <Icon name='remove' /> Kapat
                    </Button>
                    
                </Modal.Actions>
            </Modal>
        </div>
    )
}
