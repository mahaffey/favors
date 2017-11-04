import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions/favors/index'
import { Message, Label } from 'semantic-ui-react'
import { Form } from 'formsy-semantic-ui-react'

class FavorVolunteerRequestInput extends Component {
    state = {message: ''}

    //componentWillMount/WillUpdate needed??

    handleSubmit = formData => {
        // action creator dispatching credentials to validate on server
        this.props.volunteerForFavor(formData)
    }


    handleChange = formData => {
        this.setState(formData)
    }


    render () {
        return(
            <div>
                <Form
                    onChange={this.handleChange}
                    onValidSubmit={this.handleSubmit}>
                    <Form.Input>
                        {/*validations and form info*/}
                    </Form.Input>
                </Form>
            </div>
        )
    }
}

export default connect(null, actions)(FavorVolunteerRequestInput)