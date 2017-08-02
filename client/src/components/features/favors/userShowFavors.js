import React from 'react'
import { Segment, Container, Card } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as actions from '../../../actions/favors/index'
import Favor from './favor'

class userShowFavors extends React.Component {

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
        let userId = this.props.userInfo && this.props.userInfo._id

        const Favors =  this.props.favors && this.props.favors.map((el) => {
                if (el.posted_by._id !== userId)   {
                    return null
                }
                return <Favor key={el._id} favor={el}/>
            })

        return (
            <Segment
                textAlign='center'
                vertical
                className="scrolling-page"
            >

                <Container fluid>
                    <Card.Group style={{maxHeight: "500px", overflow: "auto", paddingRight: ".5em"}} itemsPerRow={4}>
                        { Favors }
                    </Card.Group>
                </Container>

            </Segment>
        )
    }
}

const mapStateToProps = (state) => {
    return {favors: state.favor.favors}
}

export default connect(mapStateToProps, actions)(userShowFavors)