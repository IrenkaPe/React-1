// Selektor 
export const getSearchString = (state) => state.searchString;

const createActionName = actionName => `app/lists/${actionName}`;
const UPDATE_SEARCHSTRING = createActionName('UPDATE_SEARCHSTRING');
// Kreator akcji
export const updateSearchString = payload => ({ type: UPDATE_SEARCHSTRING , payload });

// Subreducer
const searchStringReducer = (statePart = '', action) => {
  switch (action.type) {
    case UPDATE_SEARCHSTRING:
      return action.payload;
    default:
      return statePart;
  }
};

export default searchStringReducer;