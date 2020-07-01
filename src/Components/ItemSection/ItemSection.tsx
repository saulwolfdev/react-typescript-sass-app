import * as React from "react";
import { IItemsTextSection } from "../../Entidades";
import styles from "./ItemSection.module.scss";
export interface ItemSectionProps {
	itemSection: IItemsTextSection;
}

export interface ItemSectionState {

}

class ItemSection extends React.Component<ItemSectionProps, ItemSectionState> {
	constructor(props: ItemSectionProps) {
		super(props);
		this.state = {};
	}
	private _getClassCss = (): string => {
		switch (this.props.itemSection.identify) {
			case "Enter":
				return styles.ItemSection_Enter
			case "EnterImage":
				return styles.ItemSection_Enter_Image
			case "Whole":
				return styles.ItemSection_Whole
			case "WholeImage":
				return styles.ItemSection_Whole_Image
			case "Portfolio":
				return styles.ItemSection_Portfolio
			case "PortfolioImage":
				return styles.ItemSection_Portfolio_Image
			case "Granular":
				return styles.ItemSection_Granular
			case "GranularImage":
				return styles.ItemSection_Granular_Image
			case "Plan":
				return styles.ItemSection_Plan
			case "PlanImage":
				return styles.ItemSection_Plan_Image
			case "Live":
				return styles.ItemSection_Live
			default:
				return ""
		}
	}

	render() {
		const { title,description } = this.props.itemSection;
		return (
			<section className={this._getClassCss()}>
				<h1>{title}</h1>
				<p>{description}</p>
			</section>
		);
	}
}

export default ItemSection;