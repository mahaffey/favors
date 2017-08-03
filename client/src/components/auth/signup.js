import React, { Component } from "react"
import { reduxForm, Field } from "redux-form"
import * as actions from "../../actions/userAuthentication/index"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Button, Label, Message } from "semantic-ui-react"

const renderInput = field =>
    <div>
        <input style={{padding: "10px", border: "none", borderBottom: "solid 2px #c9c9c9", transition: "border 0.3s"}} placeholder={field.placeholder} {...field.input} type={field.type}/>
        {field.meta.touched &&
        field.meta.error &&
        <Message error className="error">{field.meta.error}</Message>}
    </div>


class Signup extends Component {
    static contextTypes = {
        router: PropTypes.object
    }

    componentWillMount(){
        this.props.clearErrorMessage()
    }

    componentWillUpdate(nextProps) {
        if (nextProps.authenticated) {
            this.context.router.history.push("/favors/all")
        }
    }

    handleFormSubmit (formProps) {
        // Call action creator to sign up the user
        this.props.signupUser(formProps)
    }



    renderAlert () {
        debugger
        if (this.props.errorMessage) {
            return (
                <div>
                    <Message error>Oops! {this.props.errorMessage}</Message>
                </div>
            )
        }
    }

    render () {
        const { handleSubmit } = this.props

        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <div>
                    <Label basic color="orange" htmlFor="email">Email:</Label>
                    <Field
                        name="email"
                        placeholder="example@me.com"
                        component={renderInput}
                        type="text" />
                </div>
                <br/>
                <div>
                    <Label basic color="orange" htmlFor="firstName">First Name:</Label>
                    <Field
                        name="firstName"
                        placeholder="David"
                        component={renderInput}
                        type="text" />
                </div>
                <br/>
                <div>
                    <Label basic color="orange" horizontal htmlFor="lastName">Last Name:</Label>
                    <Field
                        name="lastName"
                        placeholder="Guerrero"
                        component={renderInput}
                        type="text" />
                </div>
                <br/>
                <div>
                    <Label basic color="orange" htmlFor="zipCode">Zip Code:</Label>
                    <Field
                        name="zipCode"
                        placeholder="10009"
                        component={renderInput}
                        type="text" />
                </div>
                <br/>
                <div>
                    <Label basic color="orange" htmlFor="passwordConfirm">Password:</Label>
                    <Field
                        name="password"
                        placeholder="******"
                        component={renderInput}
                        type="password" />
                </div>
                <br/>
                <div>
                    <Label basic color="orange" htmlFor="passwordConfirm">Confirm Password:</Label>
                    <Field
                        name="passwordConfirm"
                        placeholder="******"
                        component={renderInput}
                        type="password" />
                </div>

                {this.renderAlert()}
                <br/>
                <Button inverted color="green" type="submit">Sign Up!</Button>
            </form>
        )
    }

}

function validate (formProps) {
    const { email, password, passwordConfirm, firstName, lastName, zipCode } = formProps
    const errors = {}

    if (!email || email.trim() === "") {
        errors.email = 'Please enter an email'
    }

    if (!password || password.trim() === "") {
        errors.password = 'Please enter a password'
    }

    if (!passwordConfirm || passwordConfirm.trim() === "") {
        errors.passwordConfirm = 'Please enter a password confirmation'
    }

    if (!firstName || firstName.trim() === "") {
        errors.firstName = 'Please enter a first name'
    }

    if (!lastName || lastName.trim() === "") {
        errors.lastName = 'Please enter a last name'
    }
    // regex checks both strings and number for 5 digits '56666' and 55666 are both valid which returns false because of "!"
    if (!(/(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipCode))) {
        errors.zipCode = 'Please enter a valid 5 digit zip code'
    }

    if (password !== passwordConfirm) {
        errors.passwordConfirm = 'Passwords must match'
    }

    return errors
}


function mapStateToProps (state) {
    return { errorMessage: state.auth.error, authenticated: state.auth.authenticated }
}

Signup = connect(mapStateToProps, actions)(Signup)

export default reduxForm({
    form: "signup",
    validate
}, mapStateToProps, actions)(Signup)




// render () {
//
//     return (
//         <Form onSubmit={this.handleFormSubmit.bind(this)}>
//             <Form.Field>
//                 <Input icon='user'
//                        iconPosition='left' type='email' value={this.state.email} name="email" onChange={this.handleChange} placeholder="Email"/>
//             </Form.Field>
//
//             <Form.Field>
//                 <Input icon='lock'
//                        iconPosition='left' value={this.state.password} name="password" type="password" onChange={this.handleChange} placeholder="Password"/>
//             </Form.Field>
//
//             <Form.Field>
//                 <Input icon='lock'
//                        iconPosition='left' value={this.state.passwordConfirm} name="passwordConfirm" type="password" onChange={this.handleChange} placeholder="Password Confirmation"/>
//             </Form.Field>
//
//             <Form.Field>
//                 <Input icon='leaf'
//                        iconPosition='left' value={this.state.firstName} name="firstName" onChange={this.handleChange} placeholder="First Name"/>
//             </Form.Field>
//
//             <Form.Field>
//                 <Input icon='leaf'
//                        iconPosition='left' value={this.state.lastName} name="lastName" onChange={this.handleChange} placeholder="Last Name"/>
//             </Form.Field>
//
//             <Form.Field>
//                 <Input icon='map outline'
//                        iconPosition='left' value={this.state.zipCode} name="zipCode" onChange={this.handleChange} placeholder="Zip Code"/>
//             </Form.Field>
//
//             {this.renderAlert()}
//
//             <Button type="submit">Sign Up</Button>
//
//         </Form>
//     )
// }