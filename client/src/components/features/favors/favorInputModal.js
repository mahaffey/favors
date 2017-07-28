import React from 'react'
import { Link } from 'react-router-dom'
import FavorInput from './favorInput'
import { Button, Icon, Modal, } from 'semantic-ui-react'

export default class favorInputModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: true
        }
    }

    handleClose = () => {
        this.setState({modalOpen: false})
    }


    render() {

        return (
            <Modal
                open={this.state.modalOpen}
                onClose={this.handleClose}
                size='small'
                closeOnDimmerClick={false}
            >
                <Modal.Header icon='browser' >
                    <h1> New Favor </h1>
                </Modal.Header>

                <Modal.Content>
                    <FavorInput />
                </Modal.Content>

                <Modal.Actions>
                    <Link to='/favors/all'>
                        <Button color='green' onClick={this.handleClose} inverted>
                            <Icon name='window close' /> Go back
                        </Button>
                    </Link>
                </Modal.Actions>

            </Modal>
        )
    }
}