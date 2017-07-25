import React from 'react'
import { Link } from 'react-router-dom'
import Signup from './signup'
import { Button, Icon, Modal, } from 'semantic-ui-react'

export default class signupModal extends React.Component {
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
                size='fullscreen'
                closeOnDimmerClick={false}
            >
                <Modal.Header>
                    <div>

                        <h2> Sign Up </h2>
                        <Icon loading name='asterisk' />
                        <Icon loading name='asterisk'/>
                        <Icon loading name='asterisk'/>

                    </div>
                </Modal.Header>

                <Modal.Content>
                    <Signup />
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