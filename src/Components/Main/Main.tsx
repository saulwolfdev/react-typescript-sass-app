
import * as React from "react";
import { Fragment } from "react";
import { Mocks } from "../../Mocks";
import styles from "./Main.module.scss";
import SectionItems from "../Section/SectionItems";
import {IItemsTextSection} from "../../Entidades";

export interface MainProps {

}

export interface MainState {
	itemsSections:Array<IItemsTextSection>;
}

class Main extends React.Component<MainProps, MainState> {
	public constructor(props: MainProps) {
		super(props);
		this.state = {
			itemsSections: [],
		};
	}

	public componentDidMount() {
		const items = new Mocks();
		let itemsSections=items.GetItemsTextSection();
		this.setState({
			itemsSections,
		});
	}

	public render() {
		return (
			<Fragment>
				<div className={styles.Main}>
					<div className={styles.Main_Content}>
						<header className={styles.Main_Content_Header}>
							<h1>HEADER</h1>
						</header>
						<main className={styles.Main_Content_Sections}>
							<SectionItems itemsSections={this.state.itemsSections}/>
						</main>
						<section className={styles.Main_Content_GetMore}>
								<h1>GET</h1>
						</section>
						<section className={styles.Main_Content_Cards}>
							<h1>CARDS</h1>
						</section>
						<footer className={styles.Main_Content_Newsletter}><h1>NEWSLETTER</h1></footer>
					</div>
				</div>

			</Fragment>
		);
	}
}

export default Main;