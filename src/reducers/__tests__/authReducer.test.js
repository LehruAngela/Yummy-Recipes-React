import authReducer from '../authReducer';

describe('Auth Reducer', () => {
  const initialState = {
    username: ''
  };

  it('returns the initial state when an action type is not passed', () => {
    const reducer = authReducer(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  it('handles GET_USERNAME as expected', () => {
    const reducer = authReducer(initialState, {
      type: 'GET_USERNAME',
      payload: { username: 'TestUser' }
    });

    expect(reducer).toEqual({ username: 'TestUser' });
  });
});
