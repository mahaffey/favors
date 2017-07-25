import React from 'react'
import { Link } from 'react-router-dom'
import Signin from './signin'
import { Button, Icon, Modal, } from 'semantic-ui-react'

export default class signinModal extends React.Component {
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
                basic
                size='small'
                closeOnDimmerClick={false}
            >
                <Modal.Header icon='browser' >
                    <h1> Sign in </h1>
                </Modal.Header>

                <Modal.Content>
                    <Signin />
                </Modal.Content>

                <Modal.Actions>
                    <Link to='/'>
                        <Button color='green' onClick={this.handleClose} inverted>
                            <Icon name='window close' /> Go back
                        </Button>
                    </Link>
                </Modal.Actions>

            </Modal>
        )
    }
}