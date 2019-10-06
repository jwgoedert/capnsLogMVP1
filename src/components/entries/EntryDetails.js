// import React from 'react'
// import moment from 'moment';

// const EntryDetails = (props)=> {
// 	const { entry } = props
// 	// const id = props.match.params.id;
// 	return (
// 		<div className="container section entry-details">
// 				<div className="card z-depth-0">
// 					<div className="card-content">
// 						<span className="card-title"> Entry Title{entry.id}</span>
// 						<p>{entry.content}</p>
// 					</div>
// 					<div className="card-action grey lighten-4">
// 						<div>Posted by {entry.authorFirstName}{entry.authorLastName}</div>
// 						{/* <div>{moment(entry.createdAt.toDate()).calendar()}</div> */}
// 					</div>	
// 				</div>
				
// 		</div>
// 	)
// }
 
// export default EntryDetails;
import React from 'react';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment';

const EntryDetails = (props)=> {
	const { entry, auth } = props
	// const id = props.match.params.id;
	console.log('entry details', props);
	if(entry){
		return (
			<div className="container section entry-details">
					<div className="card z-depth-0">
						<div className="card-content">
							<span className="card-title">{entry.category}</span>
							<p>{entry.content}</p>
						</div>
					</div>
						<div className="card-action grey lighten-4">
							<div>{moment(entry.createdAt.toDate()).calendar()}</div>
							<div>Posted by {entry.firstName}{entry.lastName}</div>
						</div>	
					
			</div>
		)
	} else {
		return(
		<div className="container center">
			<p>Loading Entry....</p>
		</div>

		)
	}
}
 
const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const entries = state.firestore.data.entries;
	const entry = entries ? entries[id] : null;
	return{
		entry: entry,
		auth: state.firebase.auth,
	} 
}

export default compose (
	connect(mapStateToProps),
	firestoreConnect([{
		collection: 'entries'
	}])
)(EntryDetails);