import * as React from 'react';
import Main from './Components/Main/Main';
import {Fragment} from "react";

export interface AppProps {
	
}
const App: React.SFC<AppProps> = () => {
	return(
		<Fragment>
				<Main/>
		</Fragment>
	);
} 
export default App;