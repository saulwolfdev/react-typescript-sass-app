import * as React from 'react';
import Main from './Components/Main/Main';
export interface AppProps {
	
}
 
const App: React.SFC<AppProps> = () => {
	return (
		<div>
			<Main/>
		</div>
	);
}
 
export default App;