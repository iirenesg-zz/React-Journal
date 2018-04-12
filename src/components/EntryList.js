import React from 'react';
import { connect } from 'react-redux';
import EntryListItem from './EntryListItem';
import selectEntries from '../selectors/entries';

export const EntryList = (props) => (
  <div>
    {props.entries.length < 1 && <p>There are no entries yet</p>}
    {props.entries.map((entry) => {
      return <EntryListItem key={entry.id} {...entry} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    entries: selectEntries(state.entries, state.filters)
  };
};

export default connect(mapStateToProps)(EntryList);