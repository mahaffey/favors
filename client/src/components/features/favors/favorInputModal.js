import React from 'react'
import { Link } from 'react-router-dom'
import FavorInput from './favorInput'
import imagesModalTab from './imagesModal'
import { Button, Icon, Modal, Tab } from 'semantic-ui-react'

const modalForm = () => {
    return  (
        <div>
            <Modal.Header icon='browser' >
                <h1> New Favor </h1>
            </Modal.Header>

            <Modal.Content>
            <FavorInput />
            </Modal.Content>


        </div>
    )
}



const panes = [
    {menuItem: 'Favor Form', render: () => <Tab.Pane>{modalForm()}</Tab.Pane>},
    {menuItem: 'Image Selector', render: () => <Tab.Pane>{imagesModalTab()}</Tab.Pane>},

]

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

                <Tab panes={panes} />

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