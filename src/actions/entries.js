import uuid from 'uuid';

// ADD_ENTRY
export const addEntry = (
  {
    title = '',
    content = '',
    emotion = 'notset',
    favorite = false,
    important = false,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_ENTRY',
  entry: {
    id: uuid(),
    title,
    content,
    emotion,
    favorite,
    important,
    createdAt
  }
});

// REMOVE_ENTRY
export const removeEntry = ({ id } = {}) => ({
  type: 'REMOVE_ENTRY',
  id
});

// EDIT_ENTRY
export const editEntry = (id, updates) => ({
  type: 'EDIT_ENTRY',
  id,
  updates
});
