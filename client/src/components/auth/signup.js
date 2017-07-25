import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "../../actions"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { Button, Form } from 'semantic-ui-react'

class Signup extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            firstName: '',
            lastName: '',
            zipCode: '',

        }
    }


    static contextTypes = {
        router: PropTypes.object
    }

    componentWillUpdate(nextProps) {
        console.log("updating signin", nextProps, this.context)
        if (nextProps.authenticated) {
            this.context.router.history.push("/favors")
        }
    }

    handleFormSubmit (formProps) {
        // Call action creator to sign up the user
        // this.props.signupUser(formProps)
        this.props.signupUser(this.state)
    }

    renderAlert () {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            )
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }

    render () {
        // const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props
        // console.log(this.props, email)

        return (
            <Form onSubmit={this.handleFormSubmit.bind(this)}>
                <Form.Field>
                    <input value={this.state.email} name="email" onChange={this.handleChange} placeholder="Email"/>
                </Form.Field>

                <Form.Field>
                    <input value={this.state.password} name="password" type="password" onChange={this.handleChange} placeholder="Password"/>
                </Form.Field>

                <Form.Field>
                    <input value={this.state.passwordConfirm} name="passwordConfirm" type="password" onChange={this.handleChange} placeholder="Password Confirmation"/>
                </Form.Field>

                <Form.Field>
                    <input value={this.state.firstName} name="firstName" onChange={this.handleChange} placeholder="First Name"/>
                </Form.Field>

                <Form.Field>
                    <input value={this.state.lastName} name="lastName" onChange={this.handleChange} placeholder="Last Name"/>
                </Form.Field>

                <Form.Field>
                    <input value={this.state.zipCode} name="zipCode" onChange={this.handleChange} placeholder="Zip Code"/>
                </Form.Field>

                {this.renderAlert()}

                <Button type="submit">Sign Up</Button>

            </Form>
        )
    }
}

function validate (formProps) {
    const errors = {}

    if (!formProps.email) {
        errors.email = "Please enter an email"
    }

    if (!formProps.password) {
        errors.password = "Please enter a password"
    }

    if (!formProps.passwordConfirm) {
        errors.passwordConfirm = "Please enter a password confirmation"
    }

    if (formProps.password !== formProps.passwordConfirm) {
        errors.password = "Passwords must match"
    }

    return errors
}

function mapStateToProps (state) {
    return { errorMessage: state.auth.error }
}

export default connect(mapStateToProps, actions)(Signup)

// export default reduxForm({
//     form: "signup",
//     fields: ["email", "password", "passwordConfirm"],
//     validate
// }, mapStateToProps, actions)(Signup)


// <fieldset className="form-group">
//     <label>Email:</label>
// <input className="form-control" {...email} />
// {email.touched && email.error && <div className="error">{email.error}</div>}
// </fieldset>
// <fieldset className="form-group">
//     <label>Password:</label>
//     <input className="form-control" {...password} type="password" />
//     {password.touched && password.error && <div className="error">{password.error}</div>}
// </fieldset>
// <fieldset className="form-group">
//     <label>Confirm Password:</label>
//     <input className="form-control" {...passwordConfirm} type="password" />
//     {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
// </fieldset>
// {this.renderAlert()}
// <button action="submit" className="btn btn-primary">Sign up!</button>