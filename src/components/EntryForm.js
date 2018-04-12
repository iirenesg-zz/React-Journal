import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

export default class EntryForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.entry ? props.entry.title : '',      
      content: props.entry ? props.entry.content : '',
      favorite: props.entry ? props.entry.favorite : false,
      important: props.entry ? props.entry.important : false,
      createdAt: props.entry ? moment(props.entry.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  };
  onContentChange = (e) => {
    const content = e.target.value;
    this.setState(() => ({ content }));
  };
  onFavoriteChange = (e) => {
    const favorite = e.target.checked;
    this.setState(() => ({ favorite }));
  };
  onImportantChange = (e) => {
    const important = e.target.checked;
    this.setState(() => ({ important }));
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.content || !this.state.title) {
      this.setState(() => ({ error: 'Please provide title and content.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        title: this.state.title,
        content: this.state.content,
        favorite: this.state.favorite,
        important: this.state.important,
        createdAt: this.state.createdAt.valueOf()
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <div className="input-box">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              type="text"
              placeholder="Title"
              autoFocus
              value={this.state.title}
              onChange={this.onTitleChange}
            />
          </div>
          <div className="input-box">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              type="text"
              placeholder="Content"
              value={this.state.content}
              onChange={this.onContentChange}
            >
            </textarea>
          </div>
          <div className="input-box date-picker-form">
            <label htmlFor="date">Date</label>
            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
          <div className="double-col">
            <div className="input-box">
              <input
                id="favorite"
                className="checkbox-hidden checkbox-favorite"
                type="checkbox"
                checked={this.state.favorite}
                onChange={this.onFavoriteChange}
              />
              <label className="checkbox-label" htmlFor="favorite">Favorite</label>
            </div>
            <div className="input-box">
              <input
                id="important"
                className="checkbox-hidden checkbox-important"
                type="checkbox"
                checked={this.state.important}
                onChange={this.onImportantChange}
              />
              <label className="checkbox-label" htmlFor="important">Important</label>
            </div>
          </div>
          <div className="button-box">
            <button className="button button-big">Submit Entry</button>
          </div>
        </form>
      </div>
    )
  }
}
