import mockAxios from 'axios'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { registerUser, getUsername } from '../authActions';

const mockStore = configureMockStore([thunk]);

describe("Auth Actions", () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  it("dispatches GET_USERNAME action and returns data on success", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [{ username: 'TestUser' }]
      })
    );

    await store.dispatch(getUsername());
    const actions = store.getActions();

    expect(actions[0].type).toEqual('GET_USERNAME');
    expect(actions[0].payload[0].username).toEqual('TestUser')
  });
});
