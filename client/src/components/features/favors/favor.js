import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon, Image } from 'semantic-ui-react'

export default class Favor extends Component {
    image() {
        if (this.props.favor.image === undefined || this.props.favor.image === '') {
            return 'http://alloveralbany.com/images/something_goes_here.jpg'
        }
        return this.props.favor.image

    }

    category() {
        if (this.props.favor.category === undefined) {
            return 'No Category'
        } else {
            return this.props.favor.category.split('')[0].toUpperCase() + this.props.favor.category.slice(1)
        }
    }

    favorLink() { return this.props.favor._id && (
            '/favors/all/' + this.props.favor._id
        )
    }

    render() {
        if (!this.props.is_completed) {
            return (
                <Card raised>
                    <Image src={this.image()} alt="bad image"/>
                    <Card.Content>
                        <Link to={this.favorLink()}>
                            <Card.Header>
                                {this.category()}
                            </Card.Header>
                            <Card.Meta>
            <span className='date'>
              Posted By: {this.props.favor.posted_by.firstName + ' ' + this.props.favor.posted_by.lastName}
            </span>
                            </Card.Meta>
                            <Card.Description>
                                {this.props.favor.poster_is_offering_favor ? "Offering" : "Looking For"}: {this.props.favor.description}
                            </Card.Description>
                        </Link>
                    </Card.Content>
                    <Card.Content extra>
                        <Link to={this.favorLink()}>
                            <a>
                                <Icon name='calendar' /> {this.props.favor.due_date} <br/>
                                <Icon name='money' /> {this.props.favor.cost} favor points <br/>
                                <Icon name='checkmark' /> {this.props.favor.minimum_rep} rep points
                            </a>
                        </Link>
                    </Card.Content>
                </Card>
            )
        }
    }
}

