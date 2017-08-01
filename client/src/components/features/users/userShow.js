import React from 'react'
import { Segment, Container, Header, Card, Image, Grid, Table, Label, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Favors from '../favors/userShowFavors'
import PropTypes from 'prop-types'
import * as actions from '../../../actions/users/index'


class userShow extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    }

    user = () => {
        let urlSuffix = this.context.router.history.location.pathname.split('/')[3]
        if (urlSuffix === "me") {
        return this.props.auth.user
        }
        return (this.props.user.filter((el) => {return el._id === urlSuffix }))[0]
    }


    render() {
        let userName = this.user() && this.user().firstName &&
            (this.user().firstName
                .split('')[0]
                .toUpperCase() +
            this.user().firstName.slice(1) + ' ' +
            this.user().lastName
                .split('')[0]
                .toUpperCase() +
            this.user().lastName.slice(1))

        let userInfo = this.user()

    return (
        <div>
            <Grid padded >
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Card centered fluid>
                            <Image bordered shape='rounded' src='http://media.vanityfair.com/photos/58c2f5aa0a144505fae9e9ee/master/pass/avatar-sequels-delayed.jpg' />
                            <h1>&nbsp;{userName} &ensp;<Icon size="small" name="check" />{userInfo && userInfo.rep} rep</h1>
                            <h3>&nbsp;Contact: {userInfo && userInfo.email}</h3>
                            <h2>&nbsp;About Me:</h2>
                            <h4> &nbsp;
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem ducimus eaque facere facilis fugit illum laboriosam laborum minus nam nemo obcaecati quae repellat rerum velit vero, voluptas? Repellat, repudiandae?
                            </h4>

                        </Card>
                    </Grid.Column>

                    <Grid.Column width={10}  >
                            <Table >
                                <Table.Header>
                                    <Table.HeaderCell colSpan='1'>
                                        <Label as='a' ribbon color="red">
                                            {userName && userName.split(' ')[0]}'s favors
                                        </Label>
                                    </Table.HeaderCell>
                                </Table.Header>
                                <Table.Row >
                                    <Favors userInfo={userInfo}/>
                                </Table.Row>

                            </Table>

                            <br></br>


                    </Grid.Column>

                </Grid.Row>

            </Grid>
        </div>

    )}

}

const mapStateToProps = (state) => {
    return {
        user: state.user.users,
        auth: state.auth,
        favor: state.favor.favors}
}

export default connect(mapStateToProps, actions)(userShow)