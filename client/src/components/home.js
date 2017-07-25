import React from 'react'
import { Segment, Image, Container, Header, Button, Icon, Grid, Visibility } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import Nav from './nav/nav'
import NavFixed from './nav/navfixed'

export default class Home extends React.Component {
    state = {}

    hideFixedMenu = () => this.setState({ visible: false })
    showFixedMenu = () => this.setState({ visible: true })


    render () {
        const { visible } = this.state
        return (
            <div>
                { visible ? <NavFixed /> : null}
                <Visibility
                    onBottomPassed={this.showFixedMenu}
                    onBottomVisible={this.hideFixedMenu}
                    once={false}
                >

                    <Segment
                        inverted
                        textAlign='center'
                        style={{ minHeight: window.outerHeight, padding: '1em 0em' }}
                        vertical
                    >

                        <Container>
                            <Nav />
                        </Container>


                        <Container text>
                            <Header
                                as='h1'
                                content='Need Some Help?'
                                inverted
                                style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '2.5em' }}
                            />
                            <Header
                                as='h2'
                                content='Here at Favors We Got You'
                                inverted
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
                </Visibility>

                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' style={{ fontSize: '2em' }}>We Help People Help People</Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    Ever thought you needed something or someone you didn't have or know? Ever have extra time around the house where you want to meet or help others?
                                </p>
                                <Header as='h3' style={{ fontSize: '2em' }}>We Make These Matches Happen</Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    Yes that's right
                                </p>
                            </Grid.Column>
                            <Grid.Column floated='right' width={6}>
                                <Image
                                    bordered
                                    rounded
                                    size='large'
                                    src='http://colinbeavan.com/wp-content/uploads/2015/07/PeopleHelpingPeople.jpg'
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign='center'>
                                <Link to="/signup">
                                    <Button size='huge'>Check Us Out</Button>
                                </Link>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>


                <Segment style={{ padding: '0em' }} vertical>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '2em' }}>"Such Wow"</Header>
                                <p style={{ fontSize: '1.33em' }}>- User of Three Months</p>
                            </Grid.Column>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '2em' }}>"How did they think of this?"</Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    <Image avatar src='https://a3-images.myspacecdn.com/images03/1/240e42b5d9ce48a78983961e7fcb3c39/600x600.jpg' />
                                    <b>Tom</b> - We all know Tom
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>


            </div>
            )
    }
}