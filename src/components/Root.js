import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import AdminPage from './routes/AdminPage'
import AuthPage from './routes/AuthPage'
import PersonPage from './routes/PersonPage'
class Root extends Component {
    render() {
        return (
            <div>
                <Route path='/admin' component={AdminPage}/>
                <Route path='/person' component={PersonPage}/>
            </div>
        )
    }
}
export default Root
