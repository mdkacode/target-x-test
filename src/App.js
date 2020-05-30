import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Notes from "./views/Notes";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route
						path={[
							"/notes-app/:folder/:note_id",
							"/notes-app/:folder",
							"/notes-app",
						]}
						component={Notes}
					/>
				</Switch>
				<Redirect from='/' to='/notes-app/' />
			</BrowserRouter>
		);
	}
}

export default App;
