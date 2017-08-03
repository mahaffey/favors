import React from 'react'
import { Route } from 'react-router-dom'
import NavFixed from '../nav/navfixed'
import FavorIndex from '../features/favors/index'
import userShowModal from '../features/users/userShowModal'
import favorShowModal from '../features/favors/favorShowModal'
import buyPoints from '../features/users/buyFavorPointsModal'
import userIndex from '../features/users/index'
// import NotFound from '../../nav/404'





const FeatureRouter = () => {
    return (
        <div>
            <Route path='/favors' component={NavFixed} />
            <Route exact path='/favors' component={FavorIndex} />
            <Route path='/favors/all' component={FavorIndex} />
            <Route path='/favors/show/:id' component={favorShowModal} />
            <Route path='/favors/users' component={userIndex} />
            <Route exact path='/favors/users/me' component={userShowModal} />
            <Route exact path='/favors/users/me/buy_points' component={buyPoints} />
            <Route path='/favors/users/:uid' component={userShowModal} />
            <Route path='/favors/my_favors' component={() => <FavorIndex me={true} />} />

            {/*<Route path='/favors/all/*' component={NotFound} />*/}
            {/*<Route path='/favors/show/*' component={NotFound} />*/}
            {/*<Route path='/favors/users/*' component={NotFound} />*/}
            {/*<Route path='/favors/my_favors/*' component={NotFound} />*/}


        </div>
    )
}

export default FeatureRouter
