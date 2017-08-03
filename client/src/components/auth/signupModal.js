import React from 'react'
import { Link } from 'react-router-dom'
import Signup from './signup'
import { Button, Icon, Modal, Header, Image } from 'semantic-ui-react'

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
                    size="tiny"
                    closeOnDimmerClick={false}
                >
                    <Modal.Header>
                            <Header as='h2' color='teal'>
                                <Image src='https://lh3.googleusercontent.com/-_AXG0hEjiY4/U4XugAqW2bI/AAAAAAAAAHY/cAOXB47lxCc/post-5399-0-20562500-1398937842.png' />
                                {' '}Create your account
                                <Icon loading name='asterisk' />
                                <Icon loading name='asterisk'/>
                                <Icon loading name='asterisk'/>
                            </Header>
                    </Modal.Header>

                    <Modal.Content>
                        <Signup />
                        <hr/>
                        Already Joined? &nbsp; <Link to='/index/signin'>Sign In</Link>
                    </Modal.Content>

                    <Modal.Actions>
                        <Link to='/'>
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