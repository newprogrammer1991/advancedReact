import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'
import emailValidator from 'email-validator'
import ErrorField from './ErrorField'
class SigInForm extends Component {
    render() {
        const {handleSubmit} = this.props;
        return (<div>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <Field name="email" component={ErrorField}/>
                <Field name="password" component={ErrorField} type="password"/>
                <div>
                    <input type="submit"/>
                </div>
            </form>
        </div>)
    }
}

const validate = ({email, password}) => {
    const errors = {};
    if (!email) errors.email = 'email is required'
    else if (!emailValidator.validate(email)) errors.email = 'Invalid Email'
    if (!password) errors.password = 'password is required'
    else if (password.length < 5) errors.password = 'To short'
    return errors
}
export default reduxForm({
    form: 'signIn',
    validate
})(SigInForm)