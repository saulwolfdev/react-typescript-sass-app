import * as React from 'react';

interface IElementProps {
	show: boolean;
}

class ShowElement extends React.Component<IElementProps, {}> {
	public render() {
		return (
			<React.Fragment>
				{(this.props.show) ? this.props.children : undefined}
			</React.Fragment>
		);
	}
}

export default ShowElement;