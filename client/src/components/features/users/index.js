import React from 'react'
import { Segment, Container, Header, Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../../../actions/users/index'
import User from './user'

class UserIndex extends React.Component {

    componentWillMount() {
        if (this.props.users.length <= 1)
            this.props.getAllUsers()
    }

    componentWillReceiveProps(nextProps) {
        console.log('next', nextProps)
        if (nextProps.users.length <= 1)
            nextProps.getAllUsers()
    }

    render() {
        const Users =  this.props.users && this.props.users.map((el) => {
                return <User key={el._id} user={el}/>
            })

        return (
            <Segment
                textAlign='center'
                style={{ minHeight: window.outerHeight, padding: '1em 0em' }}
                vertical
                inverted
            >
                <Container text>
                    <Header
                        as='h1'
                        content='Find Your Match'
                        style={{ fontSize: '3em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em', color: 'ghostwhite' }}
                    />
                </Container>
                <Segment padded style={{backgroundColor: '#484e54'}}>
                    <Container fluid>
                        <Card.Group itemsPerRow={3}>
                            { Users }
                        </Card.Group>
                    </Container>
                </Segment>
            </Segment>
        )
    }
}

const mapStateToProps = (state) => {
    return {users: state.user.users}
}

export default connect(mapStateToProps, actions)(UserIndex)