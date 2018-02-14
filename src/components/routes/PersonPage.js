import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addPerson} from '../../ducks/people'
import AddFormPeople from '../people/AddFormPeople'

class PersonPage extends Component {

    render() {
        return (
            <div>
                <h2>Add new Person</h2>
                <AddFormPeople onSubmit={this.props.addPerson}/>
            </div>
        )
    }
}

export default  connect(null, addPerson)(PersonPage)