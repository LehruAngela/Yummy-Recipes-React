import mockAxios from 'axios'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { viewRecipe } from '../recipeActions';

const mockStore = configureMockStore([thunk]);

describe("Category Actions", () => {
  let store;

  beforeEach(() => {
    store = mockStore()
  });

  it("dispatches VIEW_RECIPES action and returns data on success", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [{ recipes: [] }]
      })
    );

    await store.dispatch(viewRecipe());
    const actions = store.getActions();

    expect(actions[0].type).toEqual('VIEW_RECIPES');
    expect(actions[0].payload[0].recipes).toEqual([]);
  });
});
