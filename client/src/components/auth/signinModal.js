import React from 'react'
import { Link } from 'react-router-dom'
import Signin from './signin'
import { Button, Icon, Modal, Header, Image } from 'semantic-ui-react'

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
            <div>
                <home/>
                <Modal
                    open={this.state.modalOpen}
                    onClose={this.handleClose}
                    basic
                    size='small'
                    closeOnDimmerClick={false}
                >
                    <Modal.Header>
                        <Header as='h2' color='teal' textAlign='center'>
                            <Image src='https://lh3.googleusercontent.com/-_AXG0hEjiY4/U4XugAqW2bI/AAAAAAAAAHY/cAOXB47lxCc/post-5399-0-20562500-1398937842.png' />
                            {' '}Sign In to your account
                        </Header>
                    </Modal.Header>

                    <Modal.Content>
                        <Signin />
                        <hr/>
                            New to us? &nbsp; <Link to='/index/signup'>Sign Up</Link>
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