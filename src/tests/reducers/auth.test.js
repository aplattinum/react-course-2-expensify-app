import authReducer from '../../reducers/auth';

test('Should successfully login user', () => {
    const uid = '123'
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer({}, action) 
    expect(state).toEqual({
        uid
    })
})

test('Should successfully logout user', () => {
    const action = {
        type: 'LOGOUT',
    }
    const state = authReducer({auth: 'anthing'}, action) 
    expect(state).toEqual({})
})

