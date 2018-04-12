import React from 'react';
import { Link } from 'react-router-dom';

const EntryListItem = ({ id, title, content, favorite, important, createdAt }) => (
  <div>
    <Link className="entry" to={`/edit/${id}`}>
      <h3 className="entry-title">{title}</h3>
      <p className="entry-content">{content.substr(0, 100)}</p>
      <small className="entry-date">{Date(createdAt)}</small>
      {favorite && <span className="icon-mini icon-favorites-checked"></span>}
      {important && <span className="icon-mini icon-important-checked"></span>}
    </Link>
  </div>
);

export default EntryListItem;
