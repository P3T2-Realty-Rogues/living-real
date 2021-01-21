import React from 'react';

function MaintenanceRequest() {
	return (
		<div>
			<h3>Submit a Maintenance Request</h3>
			<form>
				<div>
					<h5>Please describe the nature of the issue:</h5>
					<label for="issue"></label>
					<textarea id="issue" name="issue" rows="4" cols="50"></textarea>
					<br></br>
				</div>
				<div>
					<button>Submit Request</button>
				</div>
			</form>
		</div>
	);
}

export default MaintenanceRequest;