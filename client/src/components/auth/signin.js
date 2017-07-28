import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "../../actions/userAuthentication/index"
import PropTypes from "prop-types"
import { Button, Form, Input } from 'semantic-ui-react'

class Signin extends Component {
    //add the router object to this.context to allow for redirects

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    static contextTypes = {
        router: PropTypes.object
    }
    componentWillUpdate(nextProps) {
        // console.log("updating signin", nextProps, this.context)
        if (nextProps.authenticated) {
            this.context.router.history.push("/favors/all")
        }
    }

    handleFormSubmit = (event) => {
        // action creator dispatching credentials to validate on server
        this.props.signinUser(this.state)
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
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

    render () {
        return (
            <div>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Field>
                        <Input icon='user'
                               iconPosition='left' value={this.state.email} name="email" onChange={this.handleChange} placeholder="email"/>
                    </Form.Field>
                    <Form.Field>
                        <Input icon='lock'
                               iconPosition='left' value={this.state.password} name='password' onChange={this.handleChange} type="password" placeholder="password" />
                    </Form.Field>
                    {this.renderAlert()}
                    <Button type="submit">Sign in</Button>
                </Form>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return { errorMessage: state.auth.error, authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps, actions)(Signin)
