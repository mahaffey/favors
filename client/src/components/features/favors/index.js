import React from 'react'
import { Segment, Button, Container, Icon, Header, Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Favor from './favor'

class FavorIndex extends React.Component {
    render() {
        const Favors = this.props.favors.map((el) => {
            return <Favor id={el.id} favor={el}/>
        })

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
                        style={{ fontSize: '3em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em' }}
                    />
                </Container>

                <Container fluid>
                    <Card.Group itemsPerRow={4}>
                        { Favors }
                    </Card.Group>
                </Container>
            </Segment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        favors: state.favor.favors
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         addFavor: addFavor
//     }, dispatch)
// }

export default connect(mapStateToProps, null)(FavorIndex)