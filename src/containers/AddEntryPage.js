import React from 'react';
import { connect } from 'react-redux';
import EntryForm from '../components/EntryForm';
import { addEntry } from '../actions/entries';

const AddEntryPage = (props) => (
  <div>
    <h1>Add a new journal entry</h1>
    <EntryForm
      onSubmit={(entry) => {
        props.dispatch(addEntry(entry));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddEntryPage);
