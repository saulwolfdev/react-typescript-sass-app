interface IIconCards {
	iconUrl?:string;
	iconName?:string;
	iconDescription?:string;
}
export interface IItemsGetMore {
	id?:string;
	imgUrl?:string;
	title?:string;
	description?:string;
    iconsCards?: Array<IIconCards>;
}