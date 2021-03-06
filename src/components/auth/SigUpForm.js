import React, {Component} from 'react'
import {reduxForm, Field} from 'redux-form'

class SigUpForm extends Component {
    render() {
        const {handleSubmit} = this.props;
        return (<div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <Field name="email" component="input"/>
                </div>
                <div>
                    <label>Name</label>
                    <Field name="password" component="input" type="password"/>
                </div>

                <div>
                    <input type="submit"/>
                </div>
            </form>
        </div>)
    }
}

export default reduxForm({
    form: 'signIn'
})(SigUpForm)
