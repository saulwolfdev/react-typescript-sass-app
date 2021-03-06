import * as React from "react";
import { IItemsTextSection } from "../../Entidades";
import ShowElement from "../ShowElement/ShowElement";
import styles from "./ItemSection.module.scss";
import ItemSectionIcons from "../ItemSectionIcons/ItemSectionIcons";
import svgArrowDown from "../../img/svg/arrowDown.svg";
import {IItemSelectColums} from "../../Entidades/IItemSelectColums";
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
	private _getClassCss = (): IItemSelectColums => {
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
		const { title, description, img, addText, textTip, propTip, imgBackground } = this.props.itemSection;
		const { textStyle, imageStyle } = this._getClassCss();
		let showButtonItem = (this.props.itemSection.identify === "Enter") ? 
		<button className={styles.ItemSection_Button}>Produkt
		<span className={styles.ItemSection_Button_Text}> for Enterprise</span>
		<img className={styles.ItemSection_Button_Img} src={svgArrowDown} alt="icon"/>
		</button> : null;
		let showText = (
			<div className={styles.ItemSection_Tip}>
				<p className={styles.ItemSection_Tip_Text}>
					<span className={styles.ItemSection_Tip_Text_Cap}>Pro Tip: Group Tasks.</span>
					{propTip}
				</p>
			</div>
		);
		let showTextLive = (
			<div className={styles.ItemSection_TipLive}>
				<p className={styles.ItemSection_TipLive_Text}>
					<span className={styles.ItemSection_TipLive_Text_Cap}>Pro Tip: Group Tasks.</span>
					{propTip}
				</p>
			</div>
		);

		let showElemenForm = (
			<div className={styles.ItemSection_Form}>
				<form className={styles.ItemSection_Form_Container}>
					<input className={styles.ItemSection_Form_Container_Input} type="text" placeholder="Your work email..." />
					<input className={styles.ItemSection_Form_Container_Button} type="button" value="Get Started Free" />
				</form>
				<p className={styles.ItemSection_Form_Text}>{addText}</p>
				<span className={styles.ItemSection_Form_Add}>{textTip}</span>
			</div>
		);
		return (
			<div className={styles.ItemSection}>
				<section className={textStyle}>
					{showButtonItem}
					<h1 className={styles.ItemSection_Title}>{title}</h1>
					<p className={styles.ItemSection_Description}>{description}</p>

					<ShowElement show={this.props.itemSection.identify === "Enter"}>
						{showElemenForm}
					</ShowElement>
					<ShowElement show={
						this.props.itemSection.identify === "Enter"
						|| this.props.itemSection.identify === "Whole"
						|| this.props.itemSection.identify === "Portfolio"
						|| this.props.itemSection.identify === "Granular"
						|| this.props.itemSection.identify === "Plan"}>
						<ItemSectionIcons itemIcons={this.props.itemSection} />
					</ShowElement>
					<ShowElement show={this.props.itemSection.identify === "Plan"}>
						{showText}
					</ShowElement>
				</section>

				<ShowElement show={this.props.itemSection.identify === "Enter"}>
					<img className={styles.ItemSection_Enter_Image_ImgEnter} src={img} alt={title}/>
					<img className={styles.ItemSection_Enter_Image_ImgBackground} src={imgBackground} alt={title} />
				</ShowElement>

				<section className={imageStyle}>
					<ShowElement show={
						this.props.itemSection.identify === "Whole"
						|| this.props.itemSection.identify === "Portfolio"
						|| this.props.itemSection.identify === "Granular"
						|| this.props.itemSection.identify === "Live"
						|| this.props.itemSection.identify === "Plan"}>
						<img src={img} style={{ width: "100%", display: "block" }} alt={title} />
					</ShowElement>
					<ShowElement show={this.props.itemSection.identify === "Live"}>
						{showTextLive}
						<div className={styles.ItemSection_ListLive}>
							<ItemSectionIcons itemIcons={this.props.itemSection} />
						</div>

					</ShowElement>
				</section>
			</div>
		);
	}
}

export default ItemSection;