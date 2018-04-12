import React from 'react';
import { connect } from 'react-redux';
import EntryForm from '../components/EntryForm';
import { editEntry, removeEntry } from '../actions/entries';

const EditEntryPage = (props) => {
  return (
    <div>
      <EntryForm
        entry={props.entry}
        onSubmit={(entry) => {
          props.dispatch(editEntry(props.entry.id, entry));
          props.history.push('/');
        }}
      />
      <div className="button-box">
        <button className="button button-big" onClick={() => {
          props.dispatch(removeEntry({ id: props.entry.id }));
          props.history.push('/');
        }}>Delete</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    entry: state.entries.find((entry) => entry.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditEntryPage);
