import React from 'react'
import { Link } from 'react-router-dom'
import { Segment, Button, Container, Icon, Header } from 'semantic-ui-react'

export default class FavorIndex extends React.Component {
    render() {
        return (
            <Segment
                textAlign='center'
                style={{ minHeight: window.outerHeight, padding: '1em 0em' }}
                vertical
            >
                <Container text>
                    <Header
                        as='h1'
                        content='Need Some Help?'
                        style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '2.5em' }}
                    />
                    <Header
                        as='h2'
                        content='Here at Favors We Got You'
                        style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                    />
                    <br/>
                    <Link to="/signup">
                        <Button primary size='huge' color="purple">
                            Get Started Now
                            <Icon name='right arrow' />
                        </Button>
                    </Link>
                    <br/><br/>
                    <Icon size='huge' name="chevron down"/>
                    <Header
                        as='h3'
                        content='Scroll Down to Learn More'
                        inverted
                        style={{ fontSize: '1.2em', fontWeight: 'normal' }}
                    />
                </Container>
            </Segment>
        )
    }
}