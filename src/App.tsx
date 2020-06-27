import * as React from 'react';
import Main from './Components/Main/Main';

export interface AppProps {
	
}
 
export interface AppState {
	
}
 
class App extends React.Component<AppProps, AppState> {

	render() { 
		return ( 
			<div>
				<Main/>
			</div>
		);
	}
}
 
export default App;