import {addPersonSaga, ADD_PERSON_REQUEST, ADD_PERSON} from './people'
import {call, put} from 'redux-saga/effects'
import {generateID} from './utils'
it('should dispatch person with id', () => {
    const person = {
        firstName: 'Roman',
        lastName: 'Roman',
        email: 'test@mail.ru'
    }
    const saga = addPersonSaga({
        type: ADD_PERSON_REQUEST,
        payload: person
    })

    expect(saga.next().value).toEqual(call(generateID))
    const id = generateID();
    expect(saga.next().value).toEqual(put({
        type: ADD_PERSON,
        payload: {id, ...person}
    }))
})