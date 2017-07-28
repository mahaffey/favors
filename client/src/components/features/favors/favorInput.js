import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from "../../../actions/favors/index"
import { Button, Form, Input, Select } from 'semantic-ui-react'
import PropTypes from "prop-types"

class FavorInput extends Component {

    constructor(props){
        super(props)
        this.state = {
            posted_by: localStorage.uid,
            volunteer: null,
            poster_is_offering_favor: null,
            description: '',
            category: '',
            cost: 10,
            is_completed: false,
            minimum_rep: 10,
            due_date: '',
            image: ''
        };
    }

    static contextTypes = {
        router: PropTypes.object
    }

    // componentWillUpdate(nextProps) {
    //     console.log("adding favor", nextProps, this.context, this)
    //     // if (nextProps.authenticated) {
    //     //     this.context.router.history.push("/favors")
    //     // }
    // }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }

    handleRadio (event) {
        const value = event.target.textContent === "Offering"
        this.setState({
            poster_is_offering_favor: value
        })
    }

    handleSelect (event) {
        const value = event.target.innerText.split(' ')[0].toLowerCase()
        this.setState({
            category: value
        })
    }

    handleFormSubmit (event) {
        // action creator dispatching credentials to validate on server
        this.props.addFavor(this.state)
        this.setState({
            poster_is_offering_favor: false,
            description: '',
            category: '',
            cost: 10,
            is_completed: false,
            minimum_rep: 10,
            due_date: '',
            image: ''
        })

        this.context.router.history.push("/favors/all")
    }

    renderAlert () {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            )
        }
    }


    render() {
        const categories = [
            { key: 'errands', text: 'Errands', value: 'errands' },
            { key: 'handyman', text: 'Handyman', value: 'handyman' },
            { key: 'borrowing', text: 'Borrowing', value: 'borrowing' },
            { key: 'free', text: 'Free Stuff', value: 'free' },
            { key: 'rides', text: 'Rides/Carpools', value: 'rides' },
            { key: 'chores', text: 'Chores', value: 'chores' },
            { key: 'other', text: 'Other', value: 'other' }
        ]

        return(
            <Form onSubmit={this.handleFormSubmit.bind(this)}>

                <Form.Group inline>
                    <label>Offering or Receiving a Favor:</label>

                    <Form.Radio label='Offering' name='poster_is_offering_favor' value={true} checked={this.state.poster_is_offering_favor === true} onChange={this.handleRadio.bind(this)} />

                    <Form.Radio label='Receiving' name='poster_is_offering_favor' value={false} checked={this.state.poster_is_offering_favor === false} onChange={this.handleRadio.bind(this)} />
                </Form.Group>

                <Form.Field>
                    <label>Description</label>
                    <Input value={this.state.description} name="description" onChange={this.handleChange} placeholder="Favor Description"/>
                </Form.Field>

                <Form.Field>
                    <label>Category</label>
                    <Input fluid type='text' action>
                        <Select fluid options={categories} value={this.state.category} name="category" onChange={this.handleSelect.bind(this)} />
                    </Input>
                </Form.Field>

                <Form.Field>
                    <label>Point Cost</label>
                    <Input value={this.state.cost} name="cost" onChange={this.handleChange} placeholder="Point Cost"/>
                </Form.Field>

                <Form.Field>
                    <label>Minimum Rep</label>
                    <Input value={this.state.minimum_rep} name="minimum_rep" onChange={this.handleChange} placeholder="Minimum Rep"/>
                </Form.Field>

                <Form.Field>
                    <label>Due Date</label>
                    <Input value={this.state.due_date} type="Date" name="due_date" onChange={this.handleChange} placeholder="Due Date"/>
                </Form.Field>

                <Form.Field>
                    <label>Image Url</label>
                    <Input value={this.state.image} name="image" onChange={this.handleChange} placeholder="
                    Image url"/>
                </Form.Field>

                {this.renderAlert()}

                <Button type="submit">Submit New Favor</Button>

            </Form>
        );
    }
};



const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps, actions)(FavorInput)