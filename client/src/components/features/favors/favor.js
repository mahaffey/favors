import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'semantic-ui-react'

export default class Favor extends Component {
    render() {
        return (
            <Card
                image={'http://alloveralbany.com/images/something_goes_here.jpg'}
                header='NAME - favor-name'
                meta='Asking for'
                description='Hey there guys I need thissss to be done'
                extra="Rep points: 10 -- Value/Cost: 10 points"
                />
        )
    }
}