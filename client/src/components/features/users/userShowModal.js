import React from 'react'
import { Link } from 'react-router-dom'
import UserShow from './userShow'
import { Button, Icon, Modal, Header, Image, Grid, Table, Card, Label } from 'semantic-ui-react'

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
            <div>
                <Modal
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    size='fullscreen'
                    closeOnDimmerClick={false}
                >
                    <Modal.Header>
                        <Header as='h2' color='teal'>
                        </Header>
                    </Modal.Header>

                    <Modal.Content>
                       <UserShow />

                    </Modal.Content>

                    <Modal.Actions>
                        <Link to='/favors'>
                            <Button color='green' onClick={this.handleClose} inverted>
                                <Icon name='window close' /> Go back
                            </Button>
                        </Link>
                    </Modal.Actions>

                </Modal>
            </div>
        )
    }
}