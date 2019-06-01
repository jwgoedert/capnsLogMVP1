import React from 'react';

const EntrySummary = ({entry, key}) => {
  // const { entry, key } = this.props;
  return(
    <div className="card z-depth-0 entry-summary">
      <div className="card-content grey-text text-darken-3">
        <p className="grey-text">{ entry.date } </p>
        <span className="card-title">{ entry.category }</span>
        <p>{ entry.location }</p>
        <p>{ entry.content }</p>
        <p>{ entry.tags }</p>
      </div>
    </div>  
  ) 
}

export default EntrySummary;