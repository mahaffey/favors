import React from 'react'
import {Route} from 'react-router-dom'
import NavFixed from '../nav/navfixed'
import FavorIndex from './favors/index'
import favorInputModal from './favors/favorInputModal'

const FeatureRouter = () => {
    return (
        <div>
            <Route path='/favors' component={NavFixed} />
            <Route path='/favors' component={FavorIndex} />
            <Route exact path='/favors/new' component={favorInputModal} />
        </div>
    )
}

export default FeatureRouter
