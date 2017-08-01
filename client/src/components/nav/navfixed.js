import React, { Component } from "react"
import { connect } from "react-redux"
import * as actions from "../../actions/userAuthentication/index"
import { Menu, Button, Container, Icon, Dropdown, Segment } from "semantic-ui-react"
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
            return this.props.getUserInfoOnAuth(localStorage.uid)
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name})

    renderLinks (activeItem) {
        if (this.props.authenticated) {
            // show a link to sign out
            const dropdownText =  this.props.user.firstName &&
                (this.props.user.firstName.split('')[0].toUpperCase() + this.props.user.firstName.slice(1) )
            return [
                <Link key="all" to="/favors/all">
                    <Menu.Item name="allFavors" active={activeItem === "allFavors"} onClick={this.handleItemClick}>
                        All Favors
                    </Menu.Item>
                </Link>,

                <Link key="me" to="/favors/my_favors">
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

                        <Menu.Item active={activeItem === "info"} onClick={this.handleItemClick}>
                            Welcome &nbsp;
                            <Dropdown text={dropdownText}>
                                <Dropdown.Menu>
                                    <Link to="/favors/users/me">
                                        <Dropdown.Item active text='My Profile' />
                                    </Link>

                                    <Link to="/favors/users">
                                        <Dropdown.Item active text='Users Near Me' />
                                    </Link>

                                    <Dropdown.Divider />

                                    <Link to="/signout">
                                        <Dropdown.Item text='Sign Out' />
                                    </Link>
                                </Dropdown.Menu>
                            </Dropdown>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Link to="/favors/users/me/buy_points">
                                <Icon name="money"/>
                                {this.props.user.wallet} &nbsp;Points&nbsp;
                            </Link>
                            <Icon name="check"/>
                            {this.props.user.rep} Rep
                        </Menu.Item>

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
            <Segment
                textAlign='center'
                style={{padding: '1.5em 0em' }}
                vertical
            >
            <Menu fixed="top" size='large'>
                <Container>
                    {this.renderLinks(activeItem)}
                </Container>
            </Menu>
            </Segment>
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
