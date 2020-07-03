interface IIconCards {
	iconUrl?:string;
	iconName?:string;
	iconDescription?:string;
}
export interface IItemsGetMore {
	id:string;
	title?:string;
	description?:string;
    iconsCards?: Array<IIconCards>;
}