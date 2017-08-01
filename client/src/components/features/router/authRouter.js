import React from 'react'
import { Route } from 'react-router-dom'
import NavFixed from '../../nav/navfixed'
import FavorIndex from '../favors/index'
import favorInputModal from '../favors/favorInputModal'
import userShowModal from '../users/userShowModal'
import favorShowModal from '../favors/favorShowModal'
import buyPoints from '../users/buyFavorPointsModal'
import userIndex from '../users/index'




const FeatureRouter = () => {
    return (
        <div>

            <Route path='/favors' component={NavFixed} />
            <Route exact path='/favors' component={FavorIndex} />
            <Route path='/favors/all' component={FavorIndex} />
            <Route path='/favors/all/:id' component={favorShowModal} />
            <Route path='/favors/users' component={userIndex} />
            <Route path='/favors/users/:uid' component={userShowModal} />
            <Route exact path='/favors/users/me' component={userShowModal} />
            <Route exact path='/favors/users/me/buy_points' component={buyPoints} />
            <Route path='/favors/my_favors' component={() => <FavorIndex me={true} />} />
            <Route exact path='/favors/all/new' component={favorInputModal} />

        </div>
    )
}

export default FeatureRouter
