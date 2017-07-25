import React from 'react'
import { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SigninModal from './auth/signinModal'
import SignupModal from './auth/signupModal'

import Signout from './auth/signout'

// import Feature from "./feature"
import RequireAuth from "./auth/require_auth"
import Nav from "./nav"

export default class App extends Component {



    render () {
        return (
            <div className="parallax">
                <Router>
                    <div>
                        <Route path="/" component={Nav} />

                        <Route path="/signin" component={SigninModal} />

                        <Route path="/signout" component={RequireAuth(Signout)} />

                        <Route path="/signup" component={SignupModal} />
                        {/*<Route path='/feature' component={RequireAuth(Feature)} />*/}
                    </div>
                </Router>
            </div>
        )
    }
}
