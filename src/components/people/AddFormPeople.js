import React, {Component} from 'react'
import ErrorField from '../auth/ErrorField'
import {Field, reduxForm} from 'redux-form'
import emailValidator from 'email-validator'
class AddFormPeople extends Component {
    render() {
        const {handleSubmit} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <Field name="firstName" type="text" component={ErrorField}/>
                    <Field name="lastName" type="text" component={ErrorField}/>
                    <Field name="email" type="text" component={ErrorField}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

const validate = ({firstName, lastName, email}) => {
    const errors = {};
    if (!firstName) errors.firstName = 'FirstName is Required';
    else if (firstName.length < 5) errors.firstName = 'FirstName too short';
    if (!lastName) errors.lastName = 'LastName is Required';
    else if (lastName.length < 5) errors.lastName = 'LastName too short';
    if (!email) errors.email = 'Email is Required';
    else if (!emailValidator.validate(email)) errors.email = 'Invalid Email';
    return errors;
}

export default reduxForm({
    form: 'addPeople',
    validate
})(AddFormPeople)