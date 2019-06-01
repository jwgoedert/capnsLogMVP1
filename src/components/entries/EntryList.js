import React from 'react';
import EntrySummary from './EntrySummary';

const EntryList = ({entries}) => {
  console.log('entries', entries);
  return (
    <div className="project-list section">
      {entries && entries.map(entry => {
        return (
          <EntrySummary entry={entry} key={entry.id}></EntrySummary>
        )
      }) }
    </div>
  )
}

export default EntryList;