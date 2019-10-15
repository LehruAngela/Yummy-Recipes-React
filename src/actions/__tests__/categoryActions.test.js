import mockAxios from 'axios'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { viewCategory, createCategory } from '../categoryActions';

const mockStore = configureMockStore([thunk]);

describe("Category Actions", () => {
  let store;

  beforeEach(() => {
    store = mockStore();
  });

  it("dispatches VIEW_CATEGORIES action and returns data on success", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [{ categories: [] }]
      })
    );

    await store.dispatch(viewCategory());
    const actions = store.getActions();

    expect(actions[0].type).toEqual('VIEW_CATEGORIES');
    expect(actions[0].payload[0].categories).toEqual([]);
  });

  it("dispatches CREATE_CATEGORY action and returns data on success", async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: [{ category: {} }]
      })
    );

    await store.dispatch(createCategory());
    const actions = store.getActions();

    expect(actions[0].type).toEqual('CREATE_CATEGORY');
    expect(actions[0].payload[0].category).toEqual({});
  });
});
