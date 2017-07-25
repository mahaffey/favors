import React from 'react'
import {Route} from 'react-router-dom'
import NavFixed from '../nav/navfixed'
import FavorIndex from './favors/index'

const FeatureRouter = () => {
    return (
        <div>
            <Route path='/favors' component={NavFixed} />
            <Route exact path='/favors' component={FavorIndex} />
        </div>
    )
}

export default FeatureRouter
