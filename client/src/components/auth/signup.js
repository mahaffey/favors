import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "../../actions/userAuthentication/index"
import PropTypes from "prop-types"
import { Button, Form, Input } from 'semantic-ui-react'

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
            errors: {
                email: null,
                password: null,
                passwordConfirm: null,
                passwordMatch: null
            }

        }
    }


    static contextTypes = {
        router: PropTypes.object
    }

    componentWillUpdate(nextProps) {
        console.log("updating signup", nextProps, this.context)
        if (nextProps.authenticated) {
            this.context.router.history.push("/favors/all")
        }
    }

    handleFormSubmit () {
        this.validate()

        if (this.state.errors.email === null &&
            this.state.errors.password === null &&
            this.state.errors.passwordConfirm === null &&
            this.state.errors.passwordConfirm === null &&
            this.state.errors.passwordMatch === null) {
                this.props.signupUser(this.state)
        }
    }

    renderAlert () {
        if (this.state.errors.email !== null ||
            this.state.errors.password !== null ||
            this.state.errors.passwordConfirm !== null ||
            this.state.errors.passwordConfirm !== null ||
            this.state.errors.passwordMatch !== null) {

                let errorArray = [this.state.errors.email,
                this.state.errors.password,
                this.state.errors.passwordConfirm,
                this.state.errors.passwordConfirm,
                this.state.errors.passwordMatch]

                const mappedError = () => {
                    return (errorArray.map((el, idx) => {
                        if (el) {return <li key={idx}>{el}</li>}
                    }))
                }
                debugger
                return (
                    <div className="alert alert-danger">
                        <strong>Oops!</strong>
                        <ol>
                            {mappedError()}
                        </ol>
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

    validate = () => {
        debugger
        if (!this.state.email) {
            this.setState({errors: {...this.state.errors, email: "Please enter an email"} })
        } else {
            this.setState({errors: {...this.state.errors, email: null}})
        }

        if (!this.state.password) {
            this.setState({errors: {...this.state.errors, password: "Please enter a password"} })
        } else {
            this.setState({errors: {...this.state.errors, password: null}})
        }

        if (!this.state.passwordConfirm) {
            this.setState({errors: {...this.state.errors, passwordConfirm: "Please enter a password confirmation"}})
        } else {
            this.setState({errors: {...this.state.errors, passwordConfirm: null}})
        }

        if (this.state.password !== this.state.passwordConfirm) {
            this.setState({errors: {...this.state.errors, passwordMatch: "Passwords must match"}})
        } else {
            this.setState({errors: {...this.state.errors, passwordMatch: null}})
        }

        return this.state.errors
    }

    render () {

        return (
            <Form onSubmit={this.handleFormSubmit.bind(this)}>
                <Form.Field>
                    <Input icon='user'
                           iconPosition='left' value={this.state.email} name="email" onChange={this.handleChange} placeholder="Email"/>
                </Form.Field>

                <Form.Field>
                    <Input icon='lock'
                           iconPosition='left' value={this.state.password} name="password" type="password" onChange={this.handleChange} placeholder="Password"/>
                </Form.Field>

                <Form.Field>
                    <Input icon='lock'
                           iconPosition='left' value={this.state.passwordConfirm} name="passwordConfirm" type="password" onChange={this.handleChange} placeholder="Password Confirmation"/>
                </Form.Field>

                <Form.Field>
                    <Input icon='leaf'
                           iconPosition='left' value={this.state.firstName} name="firstName" onChange={this.handleChange} placeholder="First Name"/>
                </Form.Field>

                <Form.Field>
                    <Input icon='leaf'
                           iconPosition='left' value={this.state.lastName} name="lastName" onChange={this.handleChange} placeholder="Last Name"/>
                </Form.Field>

                <Form.Field>
                    <Input icon='map outline'
                           iconPosition='left' value={this.state.zipCode} name="zipCode" onChange={this.handleChange} placeholder="Zip Code"/>
                </Form.Field>

                {this.renderAlert()}

                <Button type="submit">Sign Up</Button>

            </Form>
        )
    }
}



function mapStateToProps (state) {
    return { errorMessage: state.auth.error, authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps, actions)(Signup)
