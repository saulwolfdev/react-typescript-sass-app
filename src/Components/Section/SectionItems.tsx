import * as React from "react";
import { IItemsTextSection} from "../../Entidades";
import ItemSection from "../ItemSection/ItemSection";
// import styles from "./SectionsItems.module.scss";
export interface SectionItemsProps {
	itemsSections:Array<IItemsTextSection>;
}
 
export interface SectionItemsState {
	
}
 
class SectionItems extends React.Component<SectionItemsProps, SectionItemsState> {
	constructor(props: SectionItemsProps) {
		super(props);
		this.state = { };
	}

	render() { 
		return (
			<div >
					{this.props.itemsSections.map((item, i)=>
						<ItemSection key={i} itemSection={item} showElementItem={true}/>
						)}
			</div>
		);
	}
}
 
export default SectionItems;