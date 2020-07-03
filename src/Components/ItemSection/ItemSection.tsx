import * as React from "react";
import { IItemsTextSection } from "../../Entidades";
import ShowElement from "../ShowElement/ShowElement";
import styles from "./ItemSection.module.scss";
import ItemSectionIcons from "../ItemSectionIcons/ItemSectionIcons";

export interface ItemSectionProps {
	itemSection: IItemsTextSection;
	showElementForm: boolean;
}

export interface ItemSectionState {

}

class ItemSection extends React.Component<ItemSectionProps, ItemSectionState> {
	constructor(props: ItemSectionProps) {
		super(props);
		this.state = {};
	}
	private _getClassCss = (): any => {
		switch (this.props.itemSection.identify) {
			case "Enter":
				return {
					textStyle: styles.ItemSection_Enter,
					imageStyle: styles.ItemSection_Enter_Image,
				}

			case "Whole":
				return {
					textStyle: styles.ItemSection_Whole,
					imageStyle: styles.ItemSection_Whole_Image,
				}
			case "Portfolio":
				return {
					textStyle: styles.ItemSection_Portfolio,
					imageStyle: styles.ItemSection_Portfolio_Image,
				}
			case "Granular":
				return {
					textStyle: styles.ItemSection_Granular,
					imageStyle: styles.ItemSection_Granular_Image,
				}
			case "Plan":
				return {
					textStyle: styles.ItemSection_Plan,
					imageStyle: styles.ItemSection_Plan_Image,
				}
			case "Live":
				return {
					textStyle: styles.ItemSection_Live,
					imageStyle: styles.ItemSection_Live_Image,
				}
			default:
				return {
					textStyle: "",
					imageStyle: "",
				}
		}
	}
	public render() {
		const { title, description, img, addText, textTip, propTip } = this.props.itemSection;
		const { textStyle, imageStyle } = this._getClassCss();
		let showButtonItem = (this.props.itemSection.identify === "Enter") ? <button>product <samp>for Enterprise</samp></button> : null;
		let showText =(<span>{propTip}</span>);
		let showElemenForm = (
			<div>
				<form action="">
					<input type="text" />
					<input type="button" value="enviar" />
				</form>

				<small>{addText}</small>
				<span>{textTip}</span>
			</div>
		);
		return (
			<div className={styles.ItemSection}>
				<section className={textStyle}>
					{showButtonItem}
					<h1>{title}</h1>
					<p>{description}</p>
					<ShowElement show={this.props.itemSection.identify === "Enter"}>
						{showElemenForm}
					</ShowElement>
					<ShowElement show={
						this.props.itemSection.identify === "Enter"
						|| this.props.itemSection.identify === "Whole"
						|| this.props.itemSection.identify === "Portfolio"
						|| this.props.itemSection.identify === "Granullar"
						|| this.props.itemSection.identify === "Plan"}>
						<ItemSectionIcons itemIcons={this.props.itemSection} />
					</ShowElement>
					<ShowElement show={this.props.itemSection.identify === "Plan"}>
						{showText}
					</ShowElement>
				</section>

				<section className={imageStyle}>
					<img src={img} style={{ width: "100%", display: "block" }} alt="alt" />
					<ShowElement show={this.props.itemSection.identify === "Live"}>
						{showText}
						<ItemSectionIcons itemIcons={this.props.itemSection} />
					</ShowElement>
				</section>
			</div>
		);
	}
}

export default ItemSection;