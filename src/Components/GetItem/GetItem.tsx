import * as React from "react";
import { Fragment } from "react";
import { IItemsGetMore } from "../../Entidades";
import GetCardsItems from "../GetCardsItems/GetCardsItems";
import styles from "./GetItem.module.scss";
export interface GetItemProps {
	itemsGetMoreSection: IItemsGetMore;
}

export interface GetItemState {

}

class GetItem extends React.Component<GetItemProps, GetItemState> {
	constructor(props: GetItemProps) {
		super(props);
		this.state = {};
	}
	public render() {
		const { imgUrl, title, description } = this.props.itemsGetMoreSection;
		return (
			<Fragment>
				<div className={styles.GetItem}>
					<img className={styles.GetItem_Img} src={imgUrl} alt="img icon" width="144" />
					<h4 className={styles.GetItem_Title}>{title}</h4>
					<p className={styles.GetItem_Description}>{description}</p>
				</div>
				<div className={styles.GetItem_Card}>
					<GetCardsItems getCardItems={this.props.itemsGetMoreSection} />
				</div>
				<div className={styles.GetItem_Button}>
					<button className={styles.GetItem_Button_Content}>
						Learn more about Zapier + Produck
				  </button>
				</div>
			</Fragment>

		);
	}
}

export default GetItem;