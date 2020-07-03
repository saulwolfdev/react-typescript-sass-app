import * as React from "react";
import { Fragment } from "react";
import { Mocks } from "../../Mocks";
import styles from "./Main.module.scss";
import SectionItems from "../Section/SectionItems";
import { IItemsTextSection, IItemHeader, IItemsGetMore, IItemListsIcons, IItemsFooter } from "../../Entidades";
import Header from "../Header/Header";
import GetItemsSections from "../GetItemsSections/GetItemSections";
import ImageNewsletter from "../ImageNewsletter/ImageNewsletter";
import ItemListsIcons from "../ItemsListIcons/ItemListsIcons";
import Footer from "../Footer/Footer";
export interface MainProps {

}
export interface MainState {
	itemsSections: Array<IItemsTextSection>;
	itemsGetMoreSections: Array<IItemsGetMore>;
	itemsListIcons: Array<IItemListsIcons>;
	itemsFooter: Array<IItemsFooter>;
	itemHeader: IItemHeader;

}

class Main extends React.Component<MainProps, MainState> {
	public constructor(props: MainProps) {
		super(props);
		this.state = {
			itemsSections: [],
			itemsGetMoreSections: [],
			itemsListIcons: [],
			itemsFooter: [],
			itemHeader: {
				logoSvg: "",
				produkt: "",
				pricing: "",
				compare: "",
				solutions: "",
				help: "",
			},

		};
	}

	public componentDidMount() {
		const items = new Mocks();
		let itemsSections = items.GetItemsTextSection();
		let itemHeader = items.GetItemsHeader();
		let itemsGetMoreSections = items.GetItemsGetMore();
		let itemsListIcons = items.GetListsIcons();
		let itemsFooter = items.GetIItemsFooter();
		this.setState({
			itemsSections,
			itemsGetMoreSections,
			itemsListIcons,
			itemHeader,
			itemsFooter,
		});
	}

	public render() {
		return (
			<Fragment>
				<div className={styles.Main}>
					<div className={styles.Main_Content}>
						<header className={styles.Main_Content_Header}>
							<Header itemHeader={this.state.itemHeader} />
						</header>
						<main className={styles.Main_Content_Sections}>
							<SectionItems itemsSections={this.state.itemsSections}/>
						</main>
						<section className={styles.Main_Content_GetMore}>
							<GetItemsSections itemsGetMoreSections={this.state.itemsGetMoreSections}/>
						</section>
						<section className={styles.Main_Content_Cards}>
							<ItemListsIcons itemsListIcons={this.state.itemsListIcons}/>
						</section>
						<section className={styles.Main_Content_Image}>
							<ImageNewsletter/>
						</section>
						<footer className={styles.Main_Content_Newsletter}>
							<Footer itemsFooter={this.state.itemsFooter}/>
						</footer>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default Main;