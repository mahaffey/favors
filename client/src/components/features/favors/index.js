import React from 'react'
import { Segment, Container, Header, Card, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../../../actions/favors/index'
import FavorInputModal from './favorInputModal'
import Favor from './favor'

class FavorIndex extends React.Component {

    componentWillMount() {
        if (this.props.favors && this.props.favors.length === 0)
            this.props.getFavors()
    }

    componentWillReceiveProps(nextProps) {
        console.log('next', nextProps)
        if (nextProps.favors && nextProps.favors.length === 0)
            nextProps.getFavors()
    }

    openModal() {
        this.props.modalState()
    }

    mapFavors() {
        let myFavors = this.props.me
        let mapped

        if (this.props.favors) {
            debugger
            mapped = this.props.favors.map((el, idx) => {
                if (myFavors && el.posted_by._id && el.posted_by._id !== localStorage.uid)   {
                    return null
                }
                return <Favor key={idx} idx={idx} favor={el}/>
            })
        }
        return mapped
    }

    render() {
        return (
            <Segment
                textAlign='center'
                style={{ minHeight: window.outerHeight, padding: '1em 0em' }}
                vertical
                inverted
            >
                <FavorInputModal />

                <Container text>
                    <Header
                        as='h1'
                        content='Need Some Help?'
                        style={{ fontSize: '3em', fontWeight: 'normal', marginBottom: '.5em', marginTop: '.5em', color: 'ghostwhite' }}
                    />
                </Container>

                <Button inverted color="orange" onClick={this.openModal.bind(this)}>New Favor</Button>

                <Segment padded style={{backgroundColor: '#484e54'}}>
                    <Container fluid>
                        <Card.Group itemsPerRow={4}>
                            { this.mapFavors() }
                        </Card.Group>
                    </Container>
                </Segment>
            </Segment>
        )
    }
}

const mapStateToProps = (state) => {
    return {favors: state.favor.favors,
            modal: state.favor.modal}
}

export default connect(mapStateToProps, actions)(FavorIndex)