import React from 'react'
import { Route } from 'react-router-dom'
import NavFixed from '../../nav/navfixed'
import FavorIndex from '../favors/index'
import favorInputModal from '../favors/favorInputModal'


const FeatureRouter = () => {
    return (
        <div>
            <Route path='/favors' component={NavFixed} />
            <Route exact path='/favors' component={FavorIndex} />
            <Route path='/favors/all' component={FavorIndex} />
            <Route path='/favors/me' component={() => <FavorIndex me={true} />} />
            <Route exact path='/favors/all/new' component={favorInputModal} />
        </div>
    )
}

export default FeatureRouter
