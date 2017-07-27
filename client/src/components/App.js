import React from 'react'
import { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import home from './home'
import homeRouter from './homeRouter'
import Signout from './auth/signout'
import Footer from './nav/footer'
import FeatureRouter from "./features/router"
import RequireAuth from "./auth/require_auth"
import { connect } from "react-redux"


class App extends Component {

    render () {
        return (
            // I need to fix this asap
            <Router>
                <div>

                    <Route exact path="/" component={home} />

                    <Route path="/" component={homeRouter} />

                    <Route path="/signout" component={RequireAuth(Signout)} />

                    <Route path="/favors" component={RequireAuth(FeatureRouter)} />

                    <Footer/>
                </div>
            </Router>
        )
    }
}

// Probably unnecessary here for testing
function mapStateToProps (state) {
    return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps, null)(App)