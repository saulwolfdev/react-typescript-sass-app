import * as React from "react";
import { Fragment } from "react";
import {IItemsGetMore} from "../../Entidades";
import styles from "./GetCardsItems.module.scss";
export interface GetCardsItemsProps {
	getCardItems:IItemsGetMore;
}
 
export interface GetCardsItemsState {
	
}
 
class GetCardsItems extends React.Component<GetCardsItemsProps, GetCardsItemsState> {
	constructor(props: GetCardsItemsProps) {
		super(props);
		this.state = {};
	}
	render() { 
		return (
			<Fragment>
					{this.props.getCardItems.iconsCards?.map((item, i)=>{
						  return <div className={styles.Cards} key={i}>
							<div className={styles.Cards_Circle}>
								<img  className={styles.Cards_Circle_Img} src={item.iconUrl} alt={item.iconName}/>
							</div>
							<h3 className={styles.Cards_Title}>{item.iconName}</h3>
							<p className={styles.Cards_Description}>{item.iconDescription}</p>
						</div>
					})}
			</Fragment>
		);
	}
}
 
export default GetCardsItems;