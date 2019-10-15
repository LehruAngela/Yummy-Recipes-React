import categoryReducer from '../categoryReducer';

describe('Category Reducer', () => {
  const initialState = {
    categories: [],
    newCategory: {},
    total: '',
    deletedCategory: '',
  };

  it('returns the initial state when an action type is not passed', () => {
    const reducer = categoryReducer(undefined, {});
    expect(reducer).toEqual(initialState);
  });
});
