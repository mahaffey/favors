import React from 'react'
import { Link } from 'react-router-dom'
import * as actions from '../../../actions/users/index'
import PropTypes from "prop-types"
import { connect } from 'react-redux'
import { Button, Icon, Modal, Header } from 'semantic-ui-react'
//, Image, Grid, Table, Card, Label semantic

class buyPoints extends React.Component {
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
                            Buy Favor Points
                        </Header>
                    </Modal.Header>

                    <Modal.Content>
                        <h1>under construction</h1>

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

const mapStateToProps = (state) => {
    return {
        user: state.user.users,
        auth: state.auth
    }
}

export default connect(mapStateToProps, actions)(buyPoints)