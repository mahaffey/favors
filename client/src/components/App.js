import React from 'react'
import { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import home from './features/home'
import homeRouter from './router/homeRouter'
import Signout from './auth/signout'
import Footer from './nav/footer'
import FeatureRouter from "./router/authRouter"
import RequireAuth from "./auth/require_auth"
// import NotFound from './nav/404'


export default class App extends Component {

    render () {
        return (
            <Router>
                <div>

                    <Route exact path="/" component={home} />

                    <Route path="/" component={homeRouter} />

                    <Route path="/signout" component={RequireAuth(Signout)} />

                    <Route path="/favors" component={RequireAuth(FeatureRouter)} />

                    {/*<Route path="*" component={NotFound} />*/}

                    <Footer/>

                </div>
            </Router>
        )
    }
}

// Probably unnecessary here for testing
// function mapStateToProps (state) {
//     return { authenticated: state.auth.authenticated }
// }
//
// export default connect(mapStateToProps, null)(App)