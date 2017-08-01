import React from 'react'
import PropTypes from 'prop-types'
import FavorShow from './favorShow'
import { Button, Icon, Modal, Header} from 'semantic-ui-react'

export default class favorShowModal extends React.Component {
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
                    size='small'
                    closeOnDimmerClick={false}
                >
                    <Modal.Header>
                        <Header as='h2' color='teal'>
                        </Header>
                    </Modal.Header>

                    <Modal.Content>
                        <FavorShow />

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