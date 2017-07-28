import React from 'react'
import {Route} from 'react-router-dom'
import SigninModal from '../../auth/signinModal'
import SignupModal from '../../auth/signupModal'
import home from '../home'

const FeatureRouter = () => {
    return (
        <div>

            <Route path="/index" component={home} />

            <Route path="/index/signin" component={SigninModal} />

            <Route path="/index/signup" component={SignupModal} />

        </div>
    )
}

export default FeatureRouter
