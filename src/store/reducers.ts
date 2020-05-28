import * as fromActions from './actions';

export const initialState = {
  loaded: false,
  loading: false,
  data: [{label: 'Eat Pizza', complete: false }],
};
export function reducer(
  state = initialState,
  action: { type: string; payload: any }
)
{
  switch (action.type){
    case fromActions.ADD_TODO: {
      const todo = action.payload;
      const data = [...state.data, todo];
      const newState = { ...state, data: data };
      return newState;
    }
    case fromActions.REMOVE_TODO: {
      const todo = action.payload;
      const data = state.data.filter(
        todo => todo.label !== action.payload.label
      );
      const newState = {
        ...state, data: data
      };
      return newState;
    }
  }
  return state;
}
