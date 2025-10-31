import { createStore, combineReducers } from 'redux';
import initialState from './initialState';

// Import subreducerów
import listsReducer from './listsRedux';
import columnsReducer from './columnsRedux';
import cardsReducer from './cardsRedux';
import searchStringReducer from './searchStringRedux';

// Łączenie
const rootReducer = combineReducers({
  lists: listsReducer,
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer,
});

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;