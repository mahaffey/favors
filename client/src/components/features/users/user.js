import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default class User extends Component {
    image() {
        if (this.props.user.image === undefined || this.props.user.image === '') {
            return 'http://alloveralbany.com/images/something_goes_here.jpg'
        }
        return this.props.user.image

    }

    // category() {
    //     if (this.props.favor.category === undefined) {
    //         return 'No Category'
    //     } else {
    //         return this.props.favor.category.split('')[0].toUpperCase() + this.props.favor.category.slice(1)
    //     }
    // }

    render() {
            return (
                <Card raised>
                    <Image src={this.image()} alt="bad image"/>
                    <Card.Content>
                        <Card.Header>
                            test
                        </Card.Header>
                        <Card.Meta>
        <span className='date'>

        </span>
                        </Card.Meta>
                        <Card.Description>

                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>

                        </a>
                    </Card.Content>
                </Card>
            )
    }
}

