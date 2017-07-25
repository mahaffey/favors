import React, { Component } from "react"
import { connect } from "react-redux"
import { Menu } from "semantic-ui-react"
import { Link } from "react-router-dom"

class Header extends Component {

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
                <Link to="/signout">
                    <Menu.Item name="signout" active={activeItem === "signout"}
                               onClick={this.handleItemClick}>
                        Sign Out
                    </Menu.Item>
                </Link>]


        } else {
            // show a link to sign in or sign up
            return [

            <Link to="/signin">
                <Menu.Item name="signinModal" active={activeItem === "signinModal"}
                           onClick={this.handleItemClick}>
                    Sign In
                </Menu.Item>
            </Link>,

            <Link to="/signup">
                <Menu.Item name="signupModal" active={activeItem === "signupModal"} onClick={this.handleItemClick}>
                    Sign Up
                </Menu.Item>
            </Link>

            ]
        }
    }

    render () {
        const activeItem = this.state.activeItem
        return (
            <Menu inverted >
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

export default connect(mapStateToProps)(Header)
