import React from 'react'
import {Route} from 'react-router-dom'
import SigninModal from '../../auth/signinModal'
import SignupModal from '../../auth/signupModal'
import home from '../home'
// import NotFound from '../../nav/404'

const FeatureRouter = () => {
    return (
        <div>

            <Route path="/index" component={home} />
            <Route path="/index/signin" component={SigninModal} />
            <Route path="/index/signup" component={SignupModal} />

            {/*<Route path="/index/*" component={NotFound} />*/}

        </div>
    )
}

export default FeatureRouter
