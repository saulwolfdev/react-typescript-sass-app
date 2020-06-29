import * as React from "react";
import { IItemsTextSection } from "../../Entidades";
import styles from "./ItemSection.module.scss";
export interface ItemSectionProps {
	itemSection:IItemsTextSection;
}
 
export interface ItemSectionState {
	
}
 
class ItemSection extends React.Component<ItemSectionProps, ItemSectionState> {
	constructor(props: ItemSectionProps) {
		super(props);
		this.state = {};
	}
	  private _getClassCss=():string=>{
			switch(this.props.itemSection.title){
				case "1":
					return styles.Container_Content_Enter
				case "2":
					return styles.Container_Content_Enter_Image
				default:
					return ""
			}
	}
	render() {
		const {title} =this.props.itemSection;
		return (
				<div className={this._getClassCss()}>
											{/* <section className={styles.Container_Content_Enter}><h1>ENTERPRICE</h1></section>
						<section className={styles.Container_Content_Enter_Image}><h1>ENTERPRICE IMAGE</h1></section>
						<section className={styles.Container_Content_Whole}><h1>WHOLE</h1></section>
						<section className={styles.Container_Content_Whole_Image}><h1>WHOLE IMG</h1></section>
						<section className={styles.Container_Content_Portfolio}><h1>PORT </h1></section>
						<section className={styles.Container_Content_Portfolio_Image}><h1>PORT IMG</h1></section>
						<section className={styles.Container_Content_Granular}><h1>GRANULAR</h1></section>
						<section className={styles.Container_Content_Granular_Image}><h1>GRANULAR IMG</h1></section>
						<section className={styles.Container_Content_Plan}><h1>PLAN</h1></section>
						<section className={styles.Container_Content_Plan_Image}><h1>PLAN IMG</h1></section>
						<section className={styles.Container_Content_Live}><h1>LIVE</h1></section>
						<section className={styles.Container_Content_Get}><h1>GET</h1></section>
						<section className={styles.Container_Content_Card}><h1>CARD</h1></section> */}
				</div>
		);
	}
}
 
export default ItemSection;