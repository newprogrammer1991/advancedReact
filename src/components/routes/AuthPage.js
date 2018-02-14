import React, {Component} from 'react'
import SigInForm from '../auth/SigInForm'
import SignUpForm from '../auth/SigUpForm'
import {Route, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signUp, moduleName} from '../../ducks/auth'
import Loader from '../Loader'
class AuthPage extends Component {
    render() {
        const {loading} = this.props;
        return (
            <div>
                <h1>Auth Page
                </h1>
                <NavLink to={'/auth/signIn'}>Sign In</NavLink>
                <NavLink to={'/auth/signUp'}>Sign Up</NavLink>
                <Route path='/auth/signIn' render={() => <SigInForm onSubmit={this.handleSignIn}/>}/>
                <Route path='/auth/signUp' render={() => <SignUpForm onSubmit={this.handleSignUp}/>}/>
                {loading && <Loader/>}
            </div>
        )
    }

    handleSignIn = (values) => {
        console.log(values)
    }
    handleSignUp = ({email, password}) => {
        this.props.signUp(email, password)
    }
}
export default connect(state => ({
    loading: state[moduleName].loading
}), {signUp})(AuthPage)