import React from 'react';
import EntrySummary from './EntrySummary';
import { Link } from 'react-router-dom';

const EntryList = ({entries}) => {
  console.log('entriesin list', entries);
  return (
    <div className="project-list section">
      {entries && entries.map(entry => {
        console.log('entry', entry);
        return (
          <Link to={'/entry/' + entry.id} key={entry.id}>
            <EntrySummary entry={entry} key={entry.id}></EntrySummary>
          </Link>
        )
      }) }
    </div>
  )
}

export default EntryList;