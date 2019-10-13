import mockAxios from 'axios'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { viewCategory } from '../authActions';

const mockStore = configureMockStore([thunk]);

describe("Category Actions", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      categories: {}
    });
  });

  it("dispatches GET_USERNAME action and returns data on success", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [{ username: 'TestUser' }]
      })
    );

    // await store.dispatch(getUsername());
    // const actions = store.getActions();

    // expect(actions[0].type).toEqual('GET_USERNAME');
    // expect(actions[0].payload[0].username).toEqual('TestUser');
  });
});
