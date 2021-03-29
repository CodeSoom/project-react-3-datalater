import reducer, {
  addPlace,
  changeSearchField,
} from './slice';

describe('reducer', () => {
  it('changes search field', () => {
    const initialState = {
      searchFields: {
        place: '',
      },
    };

    const state = reducer(
      initialState,
      changeSearchField({ name: 'place', value: '잠실역' }),
    );

    expect(state.searchFields.place).toBe('잠실역');
  });

  it('adds place', () => {
    const initialState = {
      searchFields: {
        place: '잠실역',
      },
      places: [],
    };

    const state = reducer(initialState, addPlace());

    expect(state.places).toHaveLength(1);
  });
});
