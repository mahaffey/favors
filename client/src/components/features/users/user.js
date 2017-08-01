import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image, Grid, Header } from 'semantic-ui-react'

export default class User extends Component {

    image() {
        if (this.props.user.image === undefined || this.props.user.image === '') {
            return 'http://alloveralbany.com/images/something_goes_here.jpg'
        }
        return this.props.user.image

    }

    name() { return this.props.user.firstName &&
        (this.props.user.firstName
            .split('')[0]
            .toUpperCase() + this.props.user.firstName.slice(1) + ' ' +
        this.props.user.lastName
            .split('')[0]
            .toUpperCase() + this.props.user.lastName.slice(1))}

    userLink() { return this.props.user._id && (
                '/favors/users/' + this.props.user._id
        )
    }

    render() {
            return (
                <Card >
                    <Grid>
                        <Grid.Column width={4}>
                            <Image src={this.image()} alt="bad image"/>
                        </Grid.Column>

                        <Grid.Column width={12}>
                            <Link to={this.userLink()}>
                                <Header
                                    as='h1'
                                    content= {this.name()}
                                    style={{ fontSize: '2.5em', fontWeight: 'normal', marginBottom: 0, marginTop: ".5em"}}
                                />
                            </Link>

                        </Grid.Column>

                    </Grid>

                    <Card.Content>
                        <Card.Meta>

                        </Card.Meta>
                        <Card.Description>
                            <Icon name="check" /> Rep: {this.props.user.rep}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            email: {this.props.user.email}
                        </a>
                    </Card.Content>
                </Card>

            )
    }
}
