import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "../../actions/userAuthentication/index"
import { Menu, Button, Container, Icon } from "semantic-ui-react"
import { Link } from "react-router-dom"

class FixedNav extends Component {

    constructor(props) {
        super(props)

        this.state = {
            activeItem: 'home'
        }
    }

    componentWillMount(){
        if (this.props.authenticated)
            return this.props.getUserInfo(localStorage.uid)
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name})

    renderLinks (activeItem) {
        if (this.props.authenticated) {
            // show a link to sign out
            return [
                <Link key="all" to="/favors/all">
                    <Menu.Item name="allFavors" active={activeItem === "allFavors"} onClick={this.handleItemClick}>
                        All Favors
                    </Menu.Item>
                </Link>,

                <Link key="me" to="/favors/me">
                    <Menu.Item name="myFavors" active={activeItem === "myFavors"} onClick={this.handleItemClick}>
                        My Favors
                    </Menu.Item>
                </Link>,

                <Link key="new" to="/favors/all/new">
                    <Menu.Item name="favorInput" active={activeItem === "favorInput"} onClick={this.handleItemClick}>
                        New Favor
                    </Menu.Item>
                </Link>,

                <Menu.Menu key="right" position="right">
                    {/* need to add user show page from here*/}
                    <Menu.Item>
                        Welcome &nbsp;
                        {this.props.user.firstName &&
                        (this.props.user.firstName.split('')[0].toUpperCase() + this.props.user.firstName.slice(1))}
                        &nbsp;&nbsp;
                        <Icon name="money"/>
                        {this.props.user.wallet} &nbsp;Points&nbsp;
                        <Icon name="check"/>
                        {this.props.user.rep} Rep
                    </Menu.Item>


                        <Link to="/signout">
                            <Menu.Item name="signout" active={activeItem === "signout"}
                                       onClick={this.handleItemClick}>
                                Sign Out
                            </Menu.Item>
                        </Link>
                </Menu.Menu>]


        } else {
            // show a link to sign in or sign up
            return [
                    <Link key="index" to="/index">
                        <Menu.Item name="home" active={activeItem === "home"} onClick={this.handleItemClick}>
                            Home
                        </Menu.Item>
                    </Link>,

                    <Menu.Menu key="signInSignUp" position="right">
                        <Link to="/index/signin">
                            <Button as='a' active={activeItem === "signinModal"}
                                    onClick={this.handleItemClick}>Sign in</Button>
                        </Link>
                        <Link to="/index/signup">
                            <Button as='a' style={{ marginLeft: '0.5em' }} primary active={activeItem === "signupModal"}
                                    onClick={this.handleItemClick}>Sign Up</Button>
                        </Link>
                    </Menu.Menu>
            ]
        }
    }

    render () {
        const activeItem = this.state.activeItem
        return (
            <Menu fixed="top" size='large'>
                <Container>
                    {this.renderLinks(activeItem)}
                </Container>
            </Menu>
        )
    }
}

function mapStateToProps (state) {
    return {
        authenticated: state.auth.authenticated,
        user: state.auth.user,
    }
}

export default connect(mapStateToProps, actions)(FixedNav)
