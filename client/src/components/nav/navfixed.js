import React, { Component } from "react"
import { connect } from "react-redux"
import { Menu, Button, Container } from "semantic-ui-react"
import { Link } from "react-router-dom"

class FixedNav extends Component {

    constructor(props) {
        super(props)

        this.state = {
            activeItem: 'home'
        }
    }


    handleItemClick = (e, { name }) => this.setState({ activeItem: name})

    renderLinks (activeItem) {
        if (this.props.authenticated) {
            // show a link to sign out
            return [
                <Link to="/favors">
                    <Menu.Item name="favorIndex" active={activeItem === "favorIndex"} onClick={this.handleItemClick}>
                        New Favors
                    </Menu.Item>
                </Link>,

                <Menu.Menu position="right">
                    <Link to="/signout">
                        <Menu.Item name="signout" active={activeItem === "signout"}
                                   onClick={this.handleItemClick}>
                            Sign Out
                        </Menu.Item>
                    </Link>
                </Menu.Menu>]


        } else {
            // show a link to sign in or sign up
            return (
                <Menu.Menu position="right">
                    <Link to="/signin">
                        <Button as='a' active={activeItem === "signinModal"}
                                onClick={this.handleItemClick}>Sign in</Button>
                    </Link>
                    <Link to="/signup">
                        <Button as='a' style={{ marginLeft: '0.5em' }} primary active={activeItem === "signupModal"}
                                onClick={this.handleItemClick}>Sign Up</Button>
                    </Link>
                </Menu.Menu>
            )
        }
    }

    render () {
        const activeItem = this.state.activeItem
        return (
            <Menu fixed="top" size='large'>
                <Container>
                    <Link to="/">
                        <Menu.Item name="home" active={activeItem === "home"} onClick={this.handleItemClick}>
                            Home
                        </Menu.Item>
                    </Link>
                    {this.renderLinks(activeItem)}
                </Container>
            </Menu>
        )
    }
}

function mapStateToProps (state) {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(FixedNav)
