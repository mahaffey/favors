import React from 'react'
import { connect } from "react-redux"
import * as actions from "../../../actions/favors/index"
import FavorInput from './favorInput'
import ImagesModalTab from './imagesModal'
import { Button, Icon, Modal, Tab } from 'semantic-ui-react'



class FavorInputModal extends React.Component {

    handleClose = () => {
        this.props.modalState()
    }


    render() {

        const modalForm = () => {
            return  (
                <div>
                    <Modal.Header icon='browser' >
                        <h1> New Favor </h1>
                    </Modal.Header>

                    <Modal.Content>
                        <FavorInput handleModal={this.handleClose} />
                    </Modal.Content>
                </div>
            )
        }

        const images = () => {
            return (
                <div>
                    <Modal.Header icon='browser' >
                        <h1> Pick A Pic! </h1>
                    </Modal.Header>

                    <Modal.Content>
                        <ImagesModalTab />
                    </Modal.Content>
                </div>
            )
        }

        const panes = [
            {menuItem: 'Favor Form', render: () => <Tab.Pane>{modalForm()}</Tab.Pane>},
            {menuItem: 'Image Selector', render: () => <Tab.Pane>{images()}</Tab.Pane>},

        ]

        return (
            <Modal
                open={this.props.modal}
                onClose={this.handleClose.bind(this)}
                size='small'
                closeOnDimmerClick={false}
            >

                <Tab panes={panes} />

                <Modal.Actions>
                    <Button color='green' onClick={this.handleClose} inverted>
                        <Icon name='window close' /> Go back
                    </Button>
                </Modal.Actions>

            </Modal>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        modal: state.favor.modal
    }
}

export default connect(mapStateToProps, actions)(FavorInputModal)