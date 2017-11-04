import React from 'react'
import { Header, Card, Image, Grid, Table, Label, Accordion, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from '../../../actions/favors/index'

class favorShow extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    }

    favor = () => {
        let urlSuffix = this.context.router.history.location.pathname.split('/')[3]

        if (urlSuffix === 'newest') {
            return this.props.favor[0]
        }

        return (this.props.favor.filter((el) => {return el._id === urlSuffix}))[0]
    }

    minRep = () => {
        return this.favor() && (this.favor().minimum_rep > this.props.auth.user.rep)
    }

    havePoints = () => {
        return this.favor() && (this.favor().cost > this.props.auth.user.wallet)
    }

    render() {
        let favor = this.favor()
        let offer = this.favor && this.favor.poster_is_offering_favor ? "Offering" : "Looking For"
        let userName = favor && (
            favor.posted_by.firstName
                .split('')[0]
                .toUpperCase() + favor.posted_by.firstName.slice(1) + ' ' +
            favor.posted_by.lastName
                .split('')[0]
                .toUpperCase() + favor.posted_by.lastName.slice(1)
            )
        return (
            <div>
                <Grid padded>
                    <Grid.Row>
                        <Grid.Column width={7}>
                            <Card centered fluid>
                                <Image bordered shape='rounded' src={favor && favor.image} />
                                <h2>{offer}: {favor && favor.description}</h2>
                                <h2>Category: {favor && favor.category}</h2>
                                <Table celled>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell>Min Rep</Table.HeaderCell>
                                            <Table.HeaderCell>Cost</Table.HeaderCell>
                                            <Table.HeaderCell>Due Date</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        <Table.Row>

                                            <Table.Cell negative={this.minRep()}
                                                        positive={!this.minRep()}>
                                                {favor && favor.minimum_rep}
                                            </Table.Cell>

                                            <Table.Cell negative={this.havePoints()}
                                                        positive={!this.havePoints()}>
                                                {favor && favor.cost}
                                            </Table.Cell>

                                            <Table.Cell>
                                                {favor && favor.due_date}
                                            </Table.Cell>

                                        </Table.Row>
                                    </Table.Body>
                                 </Table>

                            </Card>
                        </Grid.Column>

                        <Grid.Column width={8} >
                            <Card centered fluid>
                                <Table >
                                    <Table.Header>
                                        <Table.HeaderCell colSpan='1'>
                                            <Label as='a' ribbon color="red">
                                                Poster Info
                                            </Label>
                                        </Table.HeaderCell>
                                    </Table.Header>
                                </Table>
                                <Header as='h2' color='grey' textAlign='left'>
                                    Name: {userName || "Not Available"}
                                </Header>

                                <Header as='h2' color='grey' textAlign='left'>
                                    Rep: {(favor && favor.posted_by.rep) || "Not Available"}
                                    <br/><br/>
                                    Contact: {(favor && favor.posted_by.email) || "Not Available"}
                                </Header>
                                <br></br>
                            </Card>
                            {/*form for messaging goes here, logic so you cannot message yourself needed*/}
                            <Accordion>
                                <Accordion.Title>
                                    <Icon name='dropdown' />
                                    Interested?
                                </Accordion.Title>
                                <Accordion.Content>
                                    forms fromf forms
                                </Accordion.Content>
                            </Accordion>
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

export default connect(mapStateToProps, actions)(favorShow)