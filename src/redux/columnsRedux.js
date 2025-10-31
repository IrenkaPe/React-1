import shortid from 'shortid';

// Selektory
export const getAllColumns = (state) => state.columns;
export const getColumnsByList = (state, listId) => state.columns.filter(col => col.listId === listId);

const createActionName = actionName => `app/cards/${actionName}`;
const ADD_COLUMN = createActionName('ADD_COLUMN');

// Kreator akcji
export const addColumn = payload => ({ type: ADD_COLUMN, payload });

// Subreducer
const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [...statePart, { ...action.payload, id: shortid() }];
    default:
      return statePart;
  }
};

export default columnsReducer;