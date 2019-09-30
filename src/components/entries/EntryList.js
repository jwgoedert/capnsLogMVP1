import React from 'react';
import EntrySummary from './EntrySummary';

const EntryList = ({entries}) => {
  console.log('entriesin list', entries);
  return (
    <div className="project-list section">
      {entries && entries.map(entry => {
        console.log('entry', entry);
        return (
          <EntrySummary entry={entry} key={entry.id}></EntrySummary>
        )
      }) }
    </div>
  )
}

export default EntryList;