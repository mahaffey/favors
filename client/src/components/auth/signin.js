import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "../../actions/userAuthentication/index"
import PropTypes from "prop-types"
import { Message, Label } from 'semantic-ui-react'
import { Form } from 'formsy-semantic-ui-react'


class Signin extends Component {
    // trying out formsy, instead of redux-form

    state = {
        email: '',
        password: ''
    }

    //add the router object to this.context to allow for redirects
    static contextTypes = {
        router: PropTypes.object
    }
    componentWillUpdate(nextProps) {
        // console.log("updating signin", nextProps, this.context)
        if (nextProps.authenticated) {
            this.context.router.history.push("/favors/all")
        }
    }

    handleSubmit = formData => {
        // action creator dispatching credentials to validate on server
        this.props.signinUser(formData)
    }

    handleChange = formData => {
        this.setState(formData)
    }

    renderAlert () {
        debugger
        const err = this.props.errorMessage
        if (err)
            return <Message error>Oops! {err}</Message>
    }

    render () {
        return (
            <div>
                <Form onChange={this.handleChange} onValidSubmit={this.handleSubmit}>
                    <Form.Input
                        name='email'
                        placeholder='Email'
                        value={this.state.email}
                        errorLabel={ <Label color='red' pointing /> }
                        validationErrors={{
                            isDefaultRequiredValue: 'Email is required'
                        }}
                        icon='user'
                        iconPosition='left'
                        required />

                    <Form.Input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        errorLabel={ <Label color='red' pointing /> }
                        validationErrors={{
                            isDefaultRequiredValue: 'Password is required'
                        }}
                        icon='lock'
                        iconPosition='left'
                        required />
                    <Form.Button type='submit' inverted color='green'>Sign In</Form.Button>
                </Form>
                {this.renderAlert()}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return { errorMessage: state.auth.error, authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps, actions)(Signin)
