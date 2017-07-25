import React, { Component } from "react"
import { connect } from "react-redux"
import { Menu, Button } from "semantic-ui-react"
import { Link } from "react-router-dom"

class Nav extends Component {

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
                <Menu.Item position="right">
                    <Link to="/signin">
                        <Button as='a' inverted active={activeItem === "signinModal"}
                            onClick={this.handleItemClick}>Sign in</Button>
                    </Link>
                    <Link to="/signup">
                        <Button as='a' inverted style={{ marginLeft: '0.5em' }} active={activeItem === "signupModal"}
                            onClick={this.handleItemClick}>Sign Up</Button>
                    </Link>
                </Menu.Item>
            )
        }
    }

    render () {
        const activeItem = this.state.activeItem
        return (
            <Menu pointing inverted secondary size='large'>
                <Menu.Header>
                    <Link to="/">
                        <Menu.Item name="home" active={activeItem === "home"} onClick={this.handleItemClick}>
                            Home
                        </Menu.Item>
                    </Link>
                </Menu.Header>
                {this.renderLinks(activeItem)}
            </Menu>
        )
    }
}

function mapStateToProps (state) {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps)(Nav)
