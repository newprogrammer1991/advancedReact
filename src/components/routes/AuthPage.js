import React, {Component} from 'react'
import SigInForm from '../auth/SigInForm'
class AuthPage extends Component {
    render() {
        return (
            <div>
                <h1>Auth Page
                </h1>
                <SigInForm/>
            </div>
        )
    }
}
export default AuthPage