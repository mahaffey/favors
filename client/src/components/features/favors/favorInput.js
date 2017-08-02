import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from "../../../actions/favors/index"
import { Button, Form, Input, Select } from 'semantic-ui-react'
import PropTypes from "prop-types"

class FavorInput extends Component {

    constructor(props){
        super(props)
        if (Object.keys(this.props.state.favor.form).length === 0) {
            this.state = {
                posted_by: {
                    id: localStorage.uid,
                    firstName: null,
                    lastName: null
                },
                volunteer: null,
                poster_is_offering_favor: null,
                description: '',
                description_long: '',
                category: '',
                cost: 10,
                is_completed: false,
                minimum_rep: 10,
                due_date: '',
                image: ''
            }
        } else {
            this.state = this.props.state.favor.form
        }
    }


    static contextTypes = {
        router: PropTypes.object
    }


    componentWillUnmount(){
        this.props.saveForm(this.state)
    }

    componentDidMount() {
        if (this.props.state && this.props.state.favor.pic !== "") {
            this.picChooser()
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
        debugger
    }

    handleRadio (event) {
        const value = event.target.textContent === "Offering"
        this.setState({
            poster_is_offering_favor: value
        })
    }

    handleSelect (event) {
        const value = event.target.innerText.split(/\n/)[0]
        console.log(value)
        this.setState({
            category: value
        })
    }

    handleFormSubmit (event) {
        // action creator dispatching credentials to validate on server
        let poster = {
            id: localStorage.uid,
            firstName: this.props.state.auth.user.firstName,
            lastName: this.props.state.auth.user.lastName
        }
        this.props.addFavor({...this.state, posted_by: poster})
        this.state = {
            posted_by: {
                id: localStorage.uid,
                firstName: null,
                lastName: null
            },
            volunteer: null,
            poster_is_offering_favor: null,
            description: '',
            description_long: '',
            category: '',
            cost: 10,
            is_completed: false,
            minimum_rep: 10,
            due_date: '',
            image: ''
        }
        this.props.modalState()
    }

    picChooser (event) {
        if (this.props.state && this.props.state.favor.pic !== ""){
            this.setState({
                image: this.props.state.favor.pic,
            })
            return true}
    }

    // renderAlert () {
    //     if (this.props.errorMessage) {
    //         return (
    //             <div className="alert alert-danger">
    //                 <strong>Oops!</strong> {this.props.errorMessage}
    //             </div>
    //         )
    //     }
    // }


    render() {
        const categories = [
            { key: 'babysitting', text: 'Babysitting', value: 'babysitting' },
            { key: 'borrowing', text: 'Borrowing', value: 'borrowing' },
            { key: 'chores', text: 'Chores', value: 'chores' },
            { key: 'errands', text: 'Errands', value: 'errands' },
            { key: 'free', text: 'Free Stuff', value: 'free' },
            { key: 'handyman', text: 'Handyman', value: 'handyman' },
            { key: 'other', text: 'Other', value: 'other' },
            { key: 'rides', text: 'Rides/Carpools', value: 'rides' },
            { key: 'tutoring', text: 'Tutoring', value: 'tutoring' },
            ]

        return(

            <Form onSubmit={this.handleFormSubmit.bind(this)}>

                <Form.Group inline >
                    <label>Offering or Receiving a Favor:</label>

                    <Form.Radio label='Offering' name='poster_is_offering_favor' value={true} checked={this.state.poster_is_offering_favor === true} onChange={this.handleRadio.bind(this)} />

                    <Form.Radio label='Receiving' name='poster_is_offering_favor' value={false} checked={this.state.poster_is_offering_favor === false} onChange={this.handleRadio.bind(this)} />
                </Form.Group>

                <Form.Field>
                    <label>Name Your Favor!</label>
                    <Input value={this.state.description} name="description" onChange={this.handleChange} placeholder="Favor Name Here"/>
                </Form.Field>

                <Form.Field>
                    <label>Describe Your Favor!</label>
                    <Input value={this.state.description_long} type="textarea" name="description_long" onChange={this.handleChange} placeholder="Description..."/>
                </Form.Field>

                <Form.Field>
                    <label>Category</label>
                    <Input fluid type='text' action>
                        <Select fluid options={categories} name="category" onChange={this.handleSelect.bind(this)} />
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
                    <Input value={this.state.image}  onClick={this.picChooser.bind(this)} onChange={this.handleChange} name="image"  placeholder="Go To Images Tab and Choose a Favor Or Enter a Image url"/>
                </Form.Field>

                {/*{this.renderAlert()}*/}

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