import * as React from "react";
import { IItemsTextSection } from "../../Entidades";

export interface IconsSectionsProps {
	itemIcons: IItemsTextSection;
}

export interface IconsSectionsState {

}

class IconsSections extends React.Component<IconsSectionsProps, IconsSectionsState> {
	constructor(props: IconsSectionsProps) {
		super(props);
		this.state = {};
	}
	render() {
		const { icons } = this.props.itemIcons;
		return (
			<ul>
				{icons?.map((item, i) => {
					return (
					<li key={i}>
						<img src={item.iconUrl} alt="icon" />
						<p>{item.description}</p>
					</li>)
				})}
			</ul>);
	}
}

export default IconsSections;