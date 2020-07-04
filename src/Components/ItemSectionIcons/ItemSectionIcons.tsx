import * as React from "react";
import { IItemsTextSection } from "../../Entidades";
import styles from "./ItemSectionIcons.module.scss";
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
			<ul className={styles.ItemSectionIcons}>
				{icons?.map((item, i) => {
					return (
					<li className={styles.ItemSectionIcons_List} key={i}>
						<img className={styles.ItemSectionIcons_List_Img} src={item.iconUrl} alt="icon"/>
						<p className={styles.ItemSectionIcons_List_Description}>{item.description}</p>
					</li>)
				})}
			</ul>);
	}
}

export default IconsSections;