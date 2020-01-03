import { login, logout } from '../../actions/auth';

test('should trigger login action generator', () => {
    const uid = "123"
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })

})

test('should trigger logout action generator', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})