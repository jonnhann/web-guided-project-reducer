import React, { useState, useReducer } from 'react';
import titleReducer from '../reducers/titleReducer';

const Title = () => {
  // turn these two into a single useReducer call
  const [title, setTitle] = useState('Hello earthlings!'); // application-level state
  const [editing, setEditing] = useState(false); // application-level state

  // instead of the standalone title and editing variables, for useReducer we want to put them in a state object: {title: string, editing: boolean}


  const initialState = { title: "Hello reducer earthlings!", editing: false };
  const [state, dispatch] = useReducer(titleReducer, initialState);

  const [newTitleText, setNewTitleText] = useState(''); // component-level state (keystroke tracking)

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  return (
    <div>
      {!editing ? (
        <h1>
          {title}{' '}
          <i onClick={() => setEditing(!editing)} className="far fa-edit" />
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() => {
              setTitle(newTitleText);
              setEditing(false);
            }}
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default Title;