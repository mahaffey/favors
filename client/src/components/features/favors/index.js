import React from 'react'
import { Segment, Container, Header, Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../../../actions/favors/index'
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


    render() {
        let myFavors = this.props.me
        const Favors =  this.props.favors && this.props.favors.map((el) => {
            if (myFavors && el.posted_by._id !== localStorage.uid)   {
                return null
            }
            return <Favor key={el._id} favor={el}/>
            })

        console.log(Favors)

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
                        content='Need Some Help?'
                        style={{ fontSize: '3em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em', color: 'ghostwhite' }}
                    />
                </Container>
                <Segment padded>
                    <Container fluid>
                        <Card.Group itemsPerRow={4}>
                            { Favors }
                        </Card.Group>
                    </Container>
                </Segment>
            </Segment>
        )
    }
}

const mapStateToProps = (state) => {
    return {favors: state.favor.favors}
}

export default connect(mapStateToProps, actions)(FavorIndex)