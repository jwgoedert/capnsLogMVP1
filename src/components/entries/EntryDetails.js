import React from 'react'

const EntryDetails = (props)=> {
	const id = props.match.params.id;
	return (
		<div className="container section entry-details">
				<div className="card z-depth-0">
					<div className="card-content">
						<span className="card-title"> Entry Title- id {id}</span>
						<p>Lorem ipsum dodlor blahahablah</p>
					</div>
					<div className="card-action grey lighten-4">
						<div>Posted by the Cap'n</div>
						<div>2nd September, 2am</div>
					</div>	
				</div>
				
		</div>
	)
}
 
export default EntryDetails;