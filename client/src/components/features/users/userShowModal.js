import React from 'react'
import PropTypes from 'prop-types'
import UserShow from './userShow'
import { Button, Icon, Modal, Header} from 'semantic-ui-react'

export default class userShowModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: true
        }
    }

    static contextTypes = {
        router: PropTypes.object
    }

    handleClose = () => {
        this.setState({modalOpen: false})
        this.context.router.history.goBack()
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
                            <Button color='green' onClick={this.handleClose} inverted>
                                <Icon name='window close' /> Go back
                            </Button>
                    </Modal.Actions>

                </Modal>
            </div>
        )
    }
}