import React from 'react'
import { Segment, Container, Header, Card, Image, Grid, Table, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../../../actions/users/index'


class userShow extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    }

    user = () => {if (this.context.router.history.location.pathname.split('/')[3] === "me") {
        return this.props.auth.user
        }
    }


    render() {
        let userName = this.user().firstName && (this.user().firstName.split('')[0].toUpperCase() + this.user().firstName.slice(1) + ' ' + this.user().lastName.split('')[0].toUpperCase() + this.user().lastName.slice(1))

    return (
        <div>
            <Grid padded>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Card centered fluid>
                            <Image bordered shape='rounded' src='http://media.vanityfair.com/photos/58c2f5aa0a144505fae9e9ee/master/pass/avatar-sequels-delayed.jpg' />
                            <h1>{userName}</h1>
                            <h2>About Me:</h2>
                            <h4>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem ducimus eaque facere facilis fugit illum laboriosam laborum minus nam nemo obcaecati quae repellat rerum velit vero, voluptas? Repellat, repudiandae?
                            </h4>

                        </Card>
                    </Grid.Column>

                    <Grid.Column width={10} >

                        <Card centered fluid>
                            <Table >
                                <Table.Header>
                                    <Table.HeaderCell colSpan='1'><Label as='a' ribbon color="red">Wazzzzaa</Label></Table.HeaderCell>
                                </Table.Header>
                            </Table>

                            <br></br>
                        </Card>
                        <Card fluid>
                            <Table >
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell colSpan='1'><Label as='a' ribbon color="blue">Feed Me:</Label></Table.HeaderCell>
                                    </Table.Row>
                                </Table.Header>
                                <Table.Body>
                                    posts
                                </Table.Body>
                            </Table>
                            <br></br>
                        </Card>


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