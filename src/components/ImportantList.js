import React from 'react';
import { connect } from 'react-redux';
import { EntryList } from './EntryList';
import selectEntries from '../selectors/entries';

const mapStateToProps = (state) => {
  return {
    entries: selectEntries(state.entries, { important: true })
  };
};

export default connect(mapStateToProps)(EntryList);