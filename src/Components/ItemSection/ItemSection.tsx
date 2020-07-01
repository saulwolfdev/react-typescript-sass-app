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
	private _getClassCss = (): any => {
			
		switch (this.props.itemSection.identify) {
			case "Enter":
				
					return{
						textStyle:styles.ItemSection_Enter,
					    imageStyle:styles.ItemSection_Enter_Image,
					}
				
				// debugger;
				// return styleDev;
			case "Whole":
				return{
					textStyle:styles.ItemSection_Whole,
					imageStyle:styles.ItemSection_Whole_Image,
				}
			default:
				return{
					textStyle:"",
					imageStyle:"",
				} 
		}
	}
	render() {
		const { title,description,img} = this.props.itemSection;
		const {textStyle, imageStyle} =this._getClassCss();
	
		return (

		<div className={styles.ItemSection}>
			<section className={textStyle} >
				<h1>{title}</h1>
				<p>{description}</p>
			</section>
			<section className={imageStyle} >
				<img src={img} style={{width:"100%",display:"block"}} alt="alt"/>
			</section>
		</div>
		);
	}
}

export default ItemSection;