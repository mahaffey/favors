import React from 'react'
import { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SigninModal from './auth/signinModal'
import SignupModal from './auth/signupModal'
import Home from './home'
import Signout from './auth/signout'
import Footer from './nav/footer'
import FeatureRouter from "./features/router"
import RequireAuth from "./auth/require_auth"


export default class App extends Component {
    constructor(){
        super()
    }

    render () {
        return (
                <Router>
                    <div>

                        <Route exact path="/" component={Home} />

                        <Route path="/signin" component={() => (<div><Home/><SigninModal/></div>)} />

                        <Route path="/signup" component={() => (<div><Home/><SignupModal/></div>)} />

                        <Route path="/signout" component={RequireAuth(Signout)} />

                        <Route path='/favors' component={RequireAuth(FeatureRouter)} />

                        <Footer/>
                    </div>
                </Router>
        )
    }
}
